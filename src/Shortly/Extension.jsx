import { useWindowSize } from "@react-hook/window-size"
import { useState, useEffect, useRef } from 'react'
const Extension = () => {
  const [img, setImg] = useState()
  const ref = useRef(null)
  const [width] = useWindowSize()
  useEffect(()=>{
    if (width >= 1280) {
      setImg('/images/bg-boost-desktop.svg')
    } else if (width >= 768) {
      setImg('/images/bg-boost-desktop.svg')
    } else {
      setImg('/images/bg-boost-mobile.svg')
    }
  },[img])
  useEffect(()=>{
    ref.current.style.backgroundImage = `url(${img}) `
  },[img])
  return (
    <div className="">
      <div className="bg-[#3a3053] ">
        <div className=" h-[200px] lg:h-[240px]" ref={ref}>
          <div className="align-element grid justify-items-center pt-[40px] lg:pt-20  gap-4 pt-6 ">
            <div>
              <h3 className="font-bold text-white text-xl lg:text-2xl">
                Boost your links today
              </h3>
            </div>
            <div>
              <button className="rounded-[40px] w-[200px]  mt-4 pl-8 pr-8 pt-[6px] pb-[6px]  text-md text-white bg-[#2ad1d1] lg:ml-0 hover:bg-[#9de1e3] font-semibold">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Extension
