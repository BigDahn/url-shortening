

const Footer = () => {
  return (
    <div className="bg-[#232027]">
      <div className="align-element flex flex-col   items-center pt-8 pb-10  md:flex-row  md:gap-20 lg:gap-48 md:items-start">
        <div>
          <h3 className="text-white font-bold cursor-pointer text-2xl">
            Shortly
          </h3>
        </div>
        <div>
          <div className="flex flex-col  pt-3 ml-0 md:gap-11 md:flex-row md:ml-6">
            <div className="text-center  md:text-left">
              <h3 className="text-white cursor-none font-semibold text-sm">
                Features
              </h3>
              <ul className="text-[#817f82] text-sm pt-2 text-center cursor-pointer md:pt-4 md:text-left">
                <li className="pb-2 hover:text-[#2ad1d1]">Link Shortening</li>
                <li className="pb-2 hover:text-[#2ad1d1]">Branded Links</li>
                <li className="hover:text-[#2ad1d1]">Analytics</li>
              </ul>
            </div>
            <div className="text-center  md:text-left">
              <h3 className="text-white font-semibold cursor-none text-sm pt-2 md:pt-0">
                Resources
              </h3>
              <ul className="text-[#817f82] text-sm cursor-pointer pt-2 md:pt-4">
                <li className="pb-2 hover:text-[#2ad1d1]">Blog</li>
                <li className="pb-2 hover:text-[#2ad1d1]">Developers</li>
                <li className="hover:text-[#2ad1d1]">Support</li>
              </ul>
            </div>
            <div className="text-center  md:text-left">
              <h3 className="text-white font-semibold cursor-none text-sm pt-2 md:pt-0">
                Company
              </h3>
              <ul className="text-[#817f82] text-sm cursor-pointer pt-2 md:pt-4">
                <li className="pb-2 hover:text-[#2ad1d1]">About</li>
                <li className="pb-2 hover:text-[#2ad1d1]">Our Team</li>
                <li className="pb-2 hover:text-[#2ad1d1]">Careers</li>
                <li className="hover:text-[#2ad1d1]">Contact</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div className="flex ml-2 gap-3 pt-4 md:pt-2 md:gap-5 md:ml-0">
            <img
              src="/src/Shortly/images/icon-facebook.svg"
              alt="fb"
              className=" cursor-pointer hover:color-[#2ad1d1]"
            />
            <img
              src="/src/Shortly/images/icon-instagram.svg"
              alt="instagram"
              className=" cursor-pointer hover:color-"
            />
            <img
              src="/src/Shortly/images/icon-pinterest.svg"
              alt="pinterest"
              className=" cursor-pointer  hover:text-[#2ad1d1]"
            />
            <img
              src="/src/Shortly/images/icon-twitter.svg"
              alt="twitter"
              className=" cursor-pointer hover:color-[#2ad1d1]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
