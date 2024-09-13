import { useSelector } from 'react-redux'

const Sidebar = () => {
  const { isModalOpen } = useSelector((state) => state.modal)
  return (
    <div className="flex justify-center align-element">
      {isModalOpen && (
        <aside
          className="
          bg-[#3a3053] flex flex-col align-element p-4 justify-between w-[90%] h-[45%]  rounded-md  fixed  z-40  translate-y-0   ease-linear transition-all delay-100 lg:hidden"
        >
          <ul className="grid text-white text-center font-semibold text-[18px] justify-center">
            <li className="mb-2 mt-4">Features</li>
            <li className="mb-2">Pricing</li>
            <li className="">Resources</li>
          </ul>

          <div className="border-t"></div>
          <div className="flex flex-col justify-center ">
            <button className="pr-8 text-white ml-7 font-semibold text-[18px]  mb-6">
              Login
            </button>
            <button className="rounded-[40px] pl-5 pr-5 pt-[5px] pb-[5px] font-semibold text-[16px] text-white bg-[#2ad1d1] ">
              Sign Up
            </button>
          </div>
        </aside>
      )}
    </div>
  )
}

export default Sidebar
