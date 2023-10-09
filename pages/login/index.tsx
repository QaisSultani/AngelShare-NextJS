import Image from "next/image"
import bottleImg from '@/public/images/Landing/Bottle.png'
import LoginButtons from "@/components/Login/LoginButtons"


const index = () => {
  return (
    <div className="text-white flex justify-center">
      <div className="w-[85%]">
        <div className="flex justify-between">
          <div className="flex-1">
            <LoginButtons />
          </div>
          <div className="flex-1 border-l-2 flex justify-center pt-16">
            <div className="w-[70%]">
              <p>Spoken to our Angelshare representatives before or was previously involved in a pre-sale? <span className="text-[#11C8E1] underline">Request Access Here.</span></p>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <div className="w-[70%]">
              <Image src={bottleImg} alt="" />
            </div>
          </div>
        </div>
        <div className="w-[66%] flex justify-center pt-16">
          <p>Not a member yet? <span className="text-[#11C8E1] underline">Get Whitelisted Now.</span></p>
        </div>
      </div>
    </div>
  )
}

export default index