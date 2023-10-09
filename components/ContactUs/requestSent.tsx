"use client";
import { useRouter } from "next/router";
function LandingSection() {
  const router = useRouter();
  return (
    <div>
      <div className="relative z-10 ">
        <div className="fixed inset-0 bg-black bg-opacity-100  transition-opacity "></div>
        <div className="fixed items-center text-white  inset-0 z-10 overflow-y-auto flex justify-center ">
          <div className="flex justify-center">
            <div className="rounded-lg bg-[#2F2F2F]">
              <div className="flex p-[40px] justify-between">
                <div className="">
                  <span className="font-Norwester text-[32px]">
                    REQUEST SENT
                  </span>
                  <div className="font-Glacial text-[20px] pt-[32px]">
                    <span>
                      Your request has been sent. You will be notified by email
                      soon
                    </span>
                  </div>

                  <div className="flex justify-start">
                    <button
                      type="submit"
                      onClick={() => router.push("/")}
                      className=" rounded-xl py-5 bg-white/[0.16] flex justify-center mt-10  w-[150px]"
                    >
                      <span className="font-Norwester text-[20px]">DONE</span>
                    </button>
                  </div>
                </div>
                <div className="pr-[29px] pt-[29px]">
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
    </div>
  );
}

export default LandingSection;
