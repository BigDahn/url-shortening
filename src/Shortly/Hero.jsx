

const Hero = () => {
  return (
    <div className="align-element flex flex-col  justify-center md:justify-between md:flex-row mt-20">
      <div>
        <div className="max-w-[380px] mt-2 lg:mt-20">
          <h3 className="font-bold text-4xl text-center lg:text-5xl md:text-left">
            More than just shorter links
          </h3>
          <p className="pb-2 mt-2 leading-loose text-[#c7c6ca] text-md text-center md:text-left">
            Build your brands recognition and get detailed insights on how your
            links are performing
          </p>
          <div className="flex m-auto justify-center md:justify-start">
            <button className="rounded-[40px] font-semibold  mt-4 pl-8 pr-8 pt-[6px] pb-[6px] cursor-pointer  text-md text-white bg-[#2ad1d1] md:ml-0 hover:bg-[#9de1e3]">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className="order-first relative right-[10px] w-[100%]  md:order-last md:left-[1%] lg:left-[20%] bottom-4 md:w-[400px] lg:w-[600px]">
        <img src="/src/Shortly/images/illustration-working.svg" alt="working" />
      </div>
    </div>
  )
}

export default Hero
