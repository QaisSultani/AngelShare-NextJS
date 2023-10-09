const AccessRequestForm = () => {
  return (
    <>
      <p>Fill in your details and we will get back to you.</p>
      <div className="space-y-10 pt-5 pb-14">
        <div className="flex gap-5 pt-5">
          <div className="h-14 rounded-lg overflow-hidden px-5 border bg-gradient-to-t from-[#FFFFFF]/10 via-[#FFFFFF]/20 to-[#FFFFFF]/10 flex-1">
            <p className="text-sm pt-1">First Name</p>
            <input className="text-white w-full bg-transparent outline-none" type="text" placeholder="John"/>
          </div>
          <div className="h-14 rounded-lg overflow-hidden px-5 border bg-gradient-to-t from-[#FFFFFF]/10 via-[#FFFFFF]/20 to-[#FFFFFF]/10 flex-1">
            <p className="text-sm pt-1">Last Name</p>
            <input className="text-white w-full bg-transparent outline-none" type="text" placeholder="Deo"/>
          </div>
        </div>
        <div className="h-14 rounded-lg overflow-hidden px-5 border bg-gradient-to-t from-[#FFFFFF]/10 via-[#FFFFFF]/20 to-[#FFFFFF]/10">
          <p className="text-sm pt-1">Email</p>
          <input className="text-white w-full bg-transparent outline-none" type="text" placeholder="johndeo@example.com"/>
        </div>
        <div className="h-14 rounded-lg overflow-hidden px-5 border bg-gradient-to-t from-[#FFFFFF]/10 via-[#FFFFFF]/20 to-[#FFFFFF]/10">
          <p className="text-sm pt-1">Phone</p>
          <input className="text-white w-full bg-transparent outline-none" type="text" placeholder="12345678"/>
        </div>
        <div className="h-14 rounded-lg overflow-hidden px-5 border bg-gradient-to-t from-[#FFFFFF]/10 via-[#FFFFFF]/20 to-[#FFFFFF]/10">
          <p className="text-sm pt-1">Wallet Address</p>
          <input className="text-white w-full bg-transparent outline-none" type="text" placeholder="0x12r45...6HJ9"/>
        </div>
      </div>
    </>
  )
}

export default AccessRequestForm