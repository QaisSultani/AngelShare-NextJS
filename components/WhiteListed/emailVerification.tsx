
import bottle from "../../public/images/Landing/Bottle.png";

function EmailVerification() {
  return (
    <div className="bg-gradient-to-br from-[#080808] via-[#111212] via-[#1f312D] to-[#76311D] py-16">
      <div className="flex justify-between py-10 flex-col md:flex-row text-white px-20 ">
        <div className="flex flex-col justify-center md:justify-start w-full md:w-[50%]">
          <div className="mt-48">
            <span className="font-Norwester text-[32px] ">
              email verification sent
            </span>
          </div>
          <br />
          <div className="mt">
            <span className="font-Glacial text-[20px] ">
              An email has been sent to johndoe@example.com.
              <br />
              <br /> Click the link in the email to complete your application to
              our whitelist. If you don’t see it, check your spam folder.
            </span>
          </div>

          <div className="mt-24 flex justify-start">
            <span className="font-Glacial text-[20px]">
              Still can’t find the email?
            </span>
          </div>
          <div className="flex justify-center md:justify-start">
          <button className="rounded-xl flex justify-center py-5 my-3  bg-gradient-to-b from-[#29607b] to-[#052c3f] w-[250px]">
            <span className="font-Norwester text-[20px]">RESEND EMAIL</span>
          </button>
          </div>
          <div className="font-Glacial mt-20">
            <span>
              Need help?{" "}
              <span className="font-bold underline text-[#11c8e1]">
                Contact Us
              </span>
            </span>
          </div>
        </div>
        <div className="flex justify-center w-full md:justify-end mt-10">
          <div className="bg-gradient-to-b from-[#837f7f] to-[#000000b4]  rounded-[15px] w-auto  h-auto">
            <div className="grid">
              <span className="text-center font-Norwester text-[20px] pt-10">
                Minting Soon
              </span>
              <img src={bottle.src} className="mx-5 my-10" alt="" />
              <span className="font-Norwester text-center text-[32px]">
                “ANGELSHARE 001”
              </span>
              <span className="font-Norwester text-center text-[20px] py-4">
                Talisker 32 Year Old Cask of Distinction <br />+ <br />
                Angelshare Member Pass
              </span>
              <button className="rounded-xl py-5 my-10 mx-auto bg-gradient-to-r from-[#DC9B27] to-[#D14E30] w-[250px]">
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
export default EmailVerification;
