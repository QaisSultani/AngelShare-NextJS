import Image from "next/image"
import metamaskImg from '@/public/images/imgmetamask.png'
import walletImg from '@/public/images/image 5wallet.png'
import coinbaseImg from '@/public/images/image 6coinbase.png'

const LoginButtons = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[60%]">
        <h1 className="uppercase">Login</h1>
        <div className="space-y-5 pt-16 items-center">
          <button className="w-full h-10 rounded-xl py-1 bg-gradient-to-b from-[#4b4b4b] to-[#101010] flex justify-center items-center">
            <div className="w-8 h-8 flex items-center">
              <div>
                <Image src={metamaskImg} alt="" className="w-10 h-10"/>
              </div>
            </div>
            <p>Metamask</p>
          </button>
          <button className="w-full h-10 rounded-xl py-1 bg-gradient-to-b from-[#4b4b4b] to-[#101010] flex justify-center items-center">
            <div className="w-9 h-9 flex items-center">
              <div>
                <Image src={walletImg} alt="" />
              </div>
            </div>
            <p>Wallet Connect</p>
          </button>
          <button className="w-full h-10 rounded-xl py-1 bg-gradient-to-b from-[#4b4b4b] to-[#101010] flex justify-center items-center">
            <div className="w-7 h-7 flex items-center">
              <div>
                <Image src={coinbaseImg} alt="" />
              </div>
            </div>
            <p>Coinbase Wallet</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default LoginButtons