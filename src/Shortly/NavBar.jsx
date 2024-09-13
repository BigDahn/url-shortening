
import { useDispatch } from "react-redux"
import {  openModal } from "./Feature/modal/modalSlice"


const NavBar = () => {
 
  const dispatch = useDispatch()
  return (
    <div className="align-element flex justify-between mt-4">
      <div>
        <div className="flex gap-4">
          <img src="/images/logo.svg" alt="logo" />

          <ul className=" hidden md:flex gap-6 text-sm mt-1 cursor-pointer font-semibold ml-4 text-[#c7c6ca] ">
            <li className="hover:text-black ">Features</li>
            <li className="hover:text-black">Pricing</li>
            <li className="hover:text-black">Resources</li>
          </ul>
        </div>
      </div>
      <div>
        <button
          className="md:hidden w-8 mt-2"
          onClick={() => {
            dispatch(openModal())
          }}
        >
          <img src="/images/icon-hamburger.svg" alt="hamburger" />
        </button>
      </div>
      <div className="hidden md:flex">
        <button className="pr-8 text-[#c7c6ca] font-semibold">Login</button>
        <button className="rounded-[40px] pl-5 pr-5 pt-[5px] pb-[5px]  text-sm text-white bg-[#2ad1d1] cursor-pointer font-semibold hover:bg-[#9de1e3] ">
          Sign Up
        </button>
      </div>
    </div>
  )
}

export default NavBar
