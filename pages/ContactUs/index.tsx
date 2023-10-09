"use client";
import LandingSection from "@/components/ContactUs/requestSent";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function contactus() {
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const [mailSent, setMailSent] = useState(false);

  const onSubmit = () => {
    setMailSent(true);
  };
  return (
    <>
      {mailSent ? (
        <LandingSection />
      ) : (
        <div className="relative z-10 ">
          <div className="md:fixed inset-0 bg-black bg-opacity-100  transition-opacity "></div>
          <div className="md:fixed md:pt-36 text-white  inset-0 z-10 md:overflow-y-auto flex flex-col items-center md:flex-row justify-center ">
            <div className="h-full w-full flex justify-center md:mb-40 flex-col items-center">
              <div className="w-full md:h-[883px] md:w-[782px] flex rounded-lg bg-[#2F2F2F] ">
                <div className="flex justify-between  w-full">
                  <div className="w-full md:px-[40px] md:py-[40px] flex flex-col md:mt-0">
                    <span className="font-Norwester text-[32px]">
                      Contact Us
                    </span>
                    <div className="font-Glacial text-[20px] flex flex-wrap justify-center md:justify-start pt-[32px]">
                      <span>Our team would love to hear from you</span>
                    </div>
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="flex flex-col w-full justify-center"
                    >
                      <div className="flex flex-col md:flex-row mt-[40px] items-center md:justify-around px-10 md:px-0 w-full md:h-[60px]">
                        <div className="flex justify-center md:justify-between w-full md:w-[325px] text-start text-white py-4">
                          <div className="grid bg-gradient-to-b from-[#323030] to-[#232121b4] h-[65px] rounded-lg border  w-full">
                            <span className="text-[13px] ml-3 mt-1">
                              First Name
                            </span>
                            <input
                              type="text"
                              {...register("first_name")}
                              className="bg-none text-white bg-transparent first_name ml-3 outline-none"
                            />
                          </div>
                        </div>
                        <div className="flex justify-center md:justify-between w-full md:w-[325px] md:ml-[10px] text-start text-white py-4">
                          <div className="grid bg-gradient-to-b from-[#323030] to-[#232121b4] h-[65px] rounded-lg border w-full">
                            <span className="text-[13px] ml-3 mt-1">
                              Last Name
                            </span>
                            <input
                              type="text"
                              {...register("last_name")}
                              className="bg-none text-white last_name bg-transparent ml-3 outline-none"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row mt-[40px] md:justify-around px-10 md:px-0 items-center">
                        <div className="flex justify-between w-full md:w-[325px] text-start text-white py-4">
                          <div className="grid bg-gradient-to-b from-[#323030] to-[#232121b4] h-[65px] rounded-lg border  w-full">
                            <span className="text-[13px] ml-3 mt-1">Email</span>
                            <input
                              type="text"
                              {...register("email")}
                              className="bg-none text-white email bg-transparent ml-3 outline-none"
                            />
                          </div>
                        </div>
                        <div className="flex justify-between w-full md:w-[325px] ml-0 md:ml-[10px] text-start text-white py-4">
                          <div className="grid bg-gradient-to-b from-[#323030] to-[#232121b4] h-[65px] rounded-lg border  w-full">
                            <span className="text-[13px] ml-3 mt-1">Phone</span>
                            <input
                              type="number"
                              {...register("number")}
                              className="bg-none text-white number bg-transparent ml-3 outline-none"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex mt-[20px] w-full px-10 md:px-0">
                        <div className="flex justify-between w-full text-start text-white py-4">
                          <div className="grid bg-gradient-to-b from-[#323030] to-[#232121b4] h-[65px] rounded-lg border  w-full">
                            <span className="text-[13px] ml-3 mt-1">
                              Company
                            </span>
                            <input
                              type="text"
                              {...register("company")}
                              className="bg-none text-white company bg-transparent ml-3 outline-none"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex mt-[20px] w-full px-10 md:px-0">
                        <div className="flex justify-between w-full text-start text-white py-4">
                          <div className="grid bg-gradient-to-b from-[#323030] to-[#232121b4] h-[117px] rounded-lg border  w-full">
                            <span className="text-[13px] ml-3 mt-1">
                              Message
                            </span>
                            <textarea
                              {...register("message")}
                              className="bg-none flex p-1 h-[80px] message text-white bg-transparent ml-3 outline-none"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center pb-28">
                        <button
                          type="submit"
                          className=" rounded-xl py-5 mt-10 mx-auto bg-gradient-to-r from-[#DC9B27] to-[#D14E30] w-[250px]"
                        >
                          <span className="font-Norwester text-[20px]">
                            SUBMIT
                          </span>
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="pr-[29px] md:pt-[29px]">
                    <span
                      className="text-xl cursor-pointer"
                      onClick={() => {
                        router.push("/");
                      }}
                    >
                      X
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
