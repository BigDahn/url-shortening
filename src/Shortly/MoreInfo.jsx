

const MoreInfo = () => {
  return (
    <div className="grid justify-center mt-20 pb-32 ">
      <div className="text-center m-auto max-w-[300px]  lg:max-w-[60vh]">
        <h3 className="font-bold text-3xl">Advanced Statistics</h3>
        <p className="mt-2 text-[#c7c6ca]">
          Track how your links are performing across the web with our advanced
          statistics dashboard
        </p>
      </div>

      <div className="mt-12 flex flex-col ml-6 m-auto gap-4 md:flex-row md:gap-4 lg:gap-8">
        <div className="relative border  mr-1.5 rounded-md bg-white w-[250px] lg:w-[300px] h-60">
          <div className="p-4 text-center md:text-left">
            <h4 className="font-bold text-[20px] pb-4 pt-4 mt-2">
              Brand Recognition
            </h4>
            <p>
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>

          <div className="absolute bottom-[92%] left-24 md:left-4 rounded-full bg-[#383155] h-14 w-14">
            <img
              src="/src/Shortly/images/icon-brand-recognition.svg"
              alt="brand"
              className="m-auto pt-3  h-10 "
            />
          </div>
          <hr
            className="h-2 w-10 md:w-6 lg:w-10 absolute rotate-90 top-[254px] left-[105px] md:top-20 md:left-[248px] lg:top-20  lg:left-[298px] md:rotate-0"
            color="#2ad1d1"
          />
        </div>
        <div className=" mt-12 border rounded-md bg-white w-[250px] lg:w-[300px] h-60">
          <div className="p-4 text-center md:text-left">
            <h4 className="font-bold text-[20px] pb-4 pt-4 mt-2">
              Detailed Records
            </h4>
            <p>
              Gain insights into who is clicking your links.Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
          <div className="relative bottom-[250px] left-24 md:left-4 lg:bottom-[96%]  rounded-full bg-[#383155] h-14 w-14">
            <img
              src="/src/Shortly/images/icon-detailed-records.svg"
              alt="detailed"
              className="m-auto pt-3  h-10 "
            />
          </div>

          <hr
            className="h-2 w-10 md:w-6 lg:w-10 relative rotate-90 top-[-24px] left-[105px] md:top-[-200px] md:left-[246px] lg:top-[-190px]  lg:left-[298px] md:rotate-0"
            color="#2ad1d1"
          />
        </div>
        <div className="border mt-12 h-60  rounded-md bg-white w-[250px] md:mt-20 lg:w-[300px] lg:ml-1.5 ">
          <div className="p-4 text-center md:text-left">
            <h4 className="font-bold text-[20px] pb-4 pt-4 mt-2">
              Fully Customizable
            </h4>
            <p>
              Improve brand awareness and content discoverablitiy through
              customizable links, supercharging audience engagement.
            </p>
          </div>
          <div className="relative bottom-[250px] left-24 md:left-4 lg:bottom-[96%] rounded-full bg-[#383155] h-14 w-14">
            <img
              src="/src/Shortly/images/icon-fully-customizable.svg"
              alt="customized"
              className="m-auto pt-3  h-10 "
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoreInfo
