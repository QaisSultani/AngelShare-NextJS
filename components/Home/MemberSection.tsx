import Earth from "../../public/images/Landing/Earth.png";
import Frame from "../../public/images/Landing/Frame.png";
import limg from "../../public/images/Landing/image 1.png";
import VIP from "../../public/images/Landing/VIP.png";
function MemberSection() {
  return (
    <>
      <div className="grid justify-center py-20 ">
        <div>
          <div className="bg-[#F6F6F6] h-[2px] w-[1000px] justify-center"></div>
        </div>
      </div>
      <div className="flex justify-center px-[20px] md:px-0 pb-20">
        <div>
          <img src={limg.src} alt="" className="static" />
        </div>
        <span className="font-Norwester text-[56px] absolute mt-[2.8rem] mr-[4rem] md:mr-[27rem]">
          The
          <br /> Angelshare
          <br /> Member Pass
        </span>
      </div>
      <div className="flex flex-col md:flex-row justify-between px-10 md:px-20 py-32">
        <div className="bg-white bg-opacity-5 backdrop-blur-lg mr-9 my-10 md:my-0 w-full md:w-[500px] rounded-2xl">
          <img src={Earth.src} alt="earth" className="px-10 py-3" />
          <div className="px-10 mb-5">
            <span className="font-Glacial text-start text-[20px]">
              Access to a global community of investors and tech entrepreneurs
            </span>
          </div>
        </div>
        <div className="bg-white bg-opacity-5 backdrop-blur-lg mr-9 my-10 md:my-0 w-full md:w-[500px] rounded-2xl">
          <img src={VIP.src} alt="earth" className="px-10 py-5" />
          <div className="px-10  mb-5">
            <span className="font-Glacial text-start text-[20px]">
              Access to a global community of investors and tech entrepreneurs
            </span>
          </div>
        </div>
        <div className="bg-white bg-opacity-5 backdrop-blur-lg mr-9 my-10 md:my-0 w-full md:w-[500px] rounded-2xl">
          <img src={Frame.src} alt="earth" className="px-10 py-4" />
          <div className="px-10 mb-5">
            <span className="font-Glacial text-start text-[20px]">
              Access to a global community of investors and tech entrepreneurs
            </span>
          </div>
        </div>
      </div>
      </>
  );
}

export default MemberSection;
