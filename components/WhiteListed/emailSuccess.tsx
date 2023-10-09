import { useRouter } from "next/router";
import bottle from "../../public/images/Landing/Bottle.png";

function Successful() {
  const router = useRouter();
  return (
    <div className="bg-gradient-to-br from-[#080808] via-[#111212] via-[#1f312D] to-[#76311D] py-2 md:py-16">
      <div className="flex justify-between py-1 md:py-10 w-full flex-col md:flex-row text-white px-10 md:px-20 ">
        <div className="flex flex-col justify-center md:justify-start w-full md:w-[40%]">
          <div className="mt-48">
            <span className="font-Norwester text-[32px] ">
              whitelist application successful
            </span>
          </div>
          <br />
          <div className="mt">
            <span className="font-Glacial text-[20px] ">
              Your whitelist request has been recorded. We will be updating you
              by email on your application status.
            </span>
          </div>

          <button
            onClick={() => router.push("/")}
            className="rounded-xl py-5 my-3 bg-gradient-to-b from-[#4b4b4b] to-[#101010] w-[250px]"
          >
            <span className="font-Norwester text-[20px]">BACK TO MAIN</span>
          </button>
        </div>
        <div className="flex justify-center md:justify-end mt-10 w-full">
          <div className="bg-gradient-to-b from-[#837f7f] to-[#000000b4]  rounded-[15px] w-full md:w-auto  h-auto">
            <div className="flex flex-col w-full">
              <span className="text-center font-Norwester text-[20px] pt-10">
                Minting Soon
              </span>
              <img src={bottle.src} className="mx-2 md:mx-5 my-10" alt="" />
              <span className="font-Norwester text-center text-[32px]">
                “ANGELSHARE 001”
              </span>
              <span className="font-Norwester text-center text-[20px] py-4">
                Talisker 32 Year Old Cask of Distinction <br />+ <br />
                Angelshare Member Pass
              </span>
              <button className="rounded-xl py-5 my-10 md:mx-auto bg-gradient-to-r from-[#DC9B27] to-[#D14E30] w-full md:w-[250px]">
                <span className="font-Norwester text-[20px]">
                  APPLY FOR ACCESS
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Successful;
