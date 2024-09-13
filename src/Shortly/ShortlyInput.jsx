import { useWindowSize } from '@react-hook/window-size'
import { useEffect, useState, useRef } from 'react'
import { toast } from 'react-toastify'

const ShortlyInput = () => {
  const [img, setImg] = useState()
  const [width] = useWindowSize()
  const ref = useRef(null)
  const [input,setInput] = useState('')
  const [error,setError] = useState(false)
  const [link,setLink] = useState([])

  
  const handleSubmit = ()=>{
     if (!input) {
         setError(!error)  
      } 
      else {
         setError(false)
         const shorten = async () => {
           const response = await fetch(
             `https://tinyurl.com/api-create.php?url=${input}`
           )
          
           const data = await response.text()
           const newData = {
             input,
             shortLink: data,
             isCopied: false
           }
           setLink([...link, newData])
          
         }
         shorten()
          setInput('')
      }
  }
   

const handleCopy = (index)=>{
setLink(link.map((i,ind)=>{
  if (ind === index) {
    return (
      {...i,isCopied: true}
      
    )
    
  }
  return i;
}))
toast.success('Link Copied')

} 

 



  useEffect(()=>{
    if (width >= 1280) {
      setImg('/src/Shortly/images/bg-shorten-desktop.svg')
    } else if (width >= 768) {
      setImg('/src/Shortly/images/bg-shorten-desktop.svg')
    } else {
      setImg('/src/Shortly/images/bg-shorten-mobile.svg')
    }
  })
 useEffect(() => {
   ref.current.style.backgroundImage = `url(${img})`
 }, [img])
  return (
    <div className="mt-4 grid justify-center ">
      <div className="border bg-[#3a3053] w-[280px] md:w-[740px] lg:w-[840px] rounded-md">
        <div className="h-[150px] rounded-md bg-cover md:h-20" ref={ref}>
          <div className=" flex flex-col items-center gap-4 m-auto md:flex-row md:justify-between md:ml-6 ">
            <div className="mt-5">
              <input
                type="text"
                className={
                  error
                    ? 'cursor-pointer rounded-md w-[200px] h-[33px] bg-white border border-red-600 hover:border-[#473dff] placeholder-red-600 focus:outline-none focus:ring-[#473dff] focus:border-red-600 text-sm pl-4 md:w-[500px]  lg:w-[600px] md:h-[40px]'
                    : 'cursor-pointer  rounded-md bg-white border hover:border-[#473dff] focus:ring-[#473dff] focus:outline-none focus:border-[#473dff]  w-[200px] h-[33px] text-sm p-4 md:w-[500px] lg:w-[600px] md:h-[40px]'
                }
                value={input}
                placeholder="Shorten a link here..."
                onChange={(e) => setInput(e.target.value)}
              />
              <span>
                {error && (
                  <p className="text-red-600 text-[10px] ">please add a link</p>
                )}
              </span>
            </div>
            <button
              className={`rounded-md pl-8 pr-8 pt-[6px] w-[200px] pb-[6px] font-semibold text-md text-white bg-[#2ad1d1] md:mr-10 mr-0 mt-0 md:mt-5 md:w-[190px] hover:bg-[#9de1e3] ${
                error && 'mb-4'
              }`}
              onClick={handleSubmit}
            >
              Shorten it!
            </button>
          </div>
        </div>
      </div>
      <div>
        {link.map((link, index) => {
          const { input, shortLink, isCopied } = link
          return (
            <ul
              className="flex flex-col   border bg-white p-2 rounded mt-3 gap-4 md:flex-row md:justify-between  "
              key={index}
            >
              <li className="font-bold border-b-2 pb-2 mt-1 md:border-none md:pb-0 md:mt-1 md:ml-2 ">
                {input}
              </li>
              <div className="flex flex-col gap-3   md:flex-row">
                <p className="text-[#2ad1d1] mt-0 md:mt-1">{shortLink}</p>
                {isCopied ? (
                  <button className="rounded pl-6 pr-6 rounded bg-[#382e52] text-white text-sm font-bold  pt-2 pb-2">
                    Copied!
                  </button>
                ) : (
                  <button
                    className="rounded-md pl-6 pr-6 rounded bg-[#2ad1d1] text-white text-sm font-bold cursor-pointer pt-2 pb-2"
                    onClick={() => {
                      handleCopy(index)
                      navigator.clipboard.writeText(shortLink)
                    }}
                  >
                    Copy
                  </button>
                )}
              </div>
            </ul>
          )
        })}
      </div>
    </div>
  )
}

export default ShortlyInput
