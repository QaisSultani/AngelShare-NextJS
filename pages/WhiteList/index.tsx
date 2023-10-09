import Successful from "@/components/WhiteListed/emailSuccess";
import EmailVerification from "@/components/WhiteListed/emailVerification";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import bottle from "../../public/images/Landing/Bottle.png";

export default function getwhitelist() {
  const { register, handleSubmit } = useForm();
  const [email, setEmail] = useState(false);
  const [verification, setVerficiation] = useState(false);

  const router = useRouter();

  const submitForm = (data: any) => {
    return true;
  };
  const onSubmit = (data: any) => {
    submitForm(data) ? setEmail(true) : setVerficiation(true);
  };
  return (
    <>
      {email ? (
        <Successful />
      ) : verification ? (
        <EmailVerification />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-[#080808] via-[#111212] via-[#1f312D] to-[#76311D] py-16">
          <div className="flex justify-around pb-10 mt-1 flex-col md:flex-row text-white px-10 md:px-20 2xl:px-[300px] w-full">
            <div className="flex flex-col justify-center md:justify-start w-full md:w-[600px] items-center mt-8">
              <div className="mt-5">
                <span className="font-Norwester text-[32px] ">
                  get whitelisted
                </span>
              </div>
              <br />

              <div className="mt-2">
                <span className="font-Glacial text-[20px] mt-24">
                  If you’re keen to secure your space for the NFT launch, share
                  your details with us.
                </span>
              </div>
              <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                <div className="flex justify-between flex-col md:flex-row w-full text-start text-white py-4 mt-3">
                  <div className="grid bg-black bg-opacity-5 backdrop-blur-lg h-[60px] rounded-xl border  w-full">
                    <span className="text-[13px] ml-3">First Name</span>
                    <input
                      type="text"
                      {...register("first_name")}
                      className="bg-none text-white bg-transparent ml-3 outline-none"
                    />
                  </div>
                  <div className="md:ml-5 mt-7 md:mt-0 grid bg-black bg-opacity-5 backdrop-blur-lg h-[60px] rounded-xl border  w-full">
                    <span className="text-[13px] ml-3">Last Name</span>
                    <input
                      type="text"
                      {...register("last_name")}
                      className="bg-none text-white bg-transparent ml-3 outline-none"
                    />
                  </div>
                </div>
                <div className="flex justify-between w-full text-start text-white py-4">
                  <div className="grid bg-black bg-opacity-5 backdrop-blur-lg h-[60px] rounded-xl border  w-full">
                    <span className="text-[13px] ml-3">Email</span>
                    <input
                      type="text"
                      {...register("email")}
                      className="bg-none text-white bg-transparent ml-3 outline-none"
                    />
                  </div>
                </div>
                <div className="flex justify-between w-full text-start text-white py-4">
                  <div className="grid bg-black bg-opacity-5 backdrop-blur-lg h-[60px] rounded-xl border  w-full">
                    <span className="text-[13px] ml-3">Phone</span>
                    <input
                      type="number"
                      {...register("number")}
                      className="bg-none text-white bg-transparent ml-3 outline-none "
                    />
                  </div>
                </div>
                <div className="flex justify-between w-full text-start text-white py-4">
                  <div className="grid bg-black bg-opacity-5 backdrop-blur-lg h-[60px] rounded-xl border  w-full">
                    <span className="text-[13px] ml-3">Company</span>
                    <input
                      type="text"
                      {...register("company")}
                      className="bg-none text-white bg-transparent ml-3 outline-none"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="rounded-xl py-5 my-10 mx-auto bg-gradient-to-r from-[#DC9B27] to-[#D14E30] w-[250px]"
                >
                  <span className="font-Norwester text-[20px]">
                    get on the whitelist
                  </span>
                </button>
              </form>

              <div>
                <span className="font-Glacial text-[20px]">
                  Spoken to our Angelshare representatives before or involved in
                  a pre-sale event?{" "}
                  <span className="text-[#11c8e1] underline ">
                    Request Access Here.
                  </span>
                </span>
              </div>
            </div>
            <div className="flex justify-center w-full md:justify-end mt-28 m-3">
              <div className="bg-white bg-opacity-5 backdrop-blur-lg rounded-[15px] w-auto  h-auto">
                <div className="grid mb-6">
                  <span className="text-center font-Norwester text-[20px] pt-10">
                    Minting Soon
                  </span>
                  <img src={bottle.src} className="px-5 my-10" alt="" />
                  <span className="font-Norwester text-center text-[32px]">
                    “ANGELSHARE 001”
                  </span>
                  <span className="font-Norwester text-center text-[20px] py-4">
                    Talisker 32 Year Old Cask of Distinction <br />+ <br />
                    Angelshare Member Pass
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
