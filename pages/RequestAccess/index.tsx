import AccessRequestPage from "@/components/RequestAccess/AccessRequestPage"
import bottleImg from '@/public/images/Landing/Bottle.png'
import Image from "next/image"

const index = () => {
  return (
    <div className="px-7 text-white font-Glacial flex flex-col justify-center h-full">
      <div className="flex justify-center sm:justify-evenly">
        <div className="sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[35%] 2xl:w-[30%]">
          <AccessRequestPage />
        </div>
        <div className="hidden lg:block">
          <div className="flex items-center h-full pt-10">
            <Image src={bottleImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default index