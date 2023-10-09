import { useState } from "react"
import AccessRequestForm from "./AccessRequestForm"
import AccessRequestSent from "./AccessRequestSent"

const AccessRequestPage = () => {
  const [request, setRequest] = useState(false)

  const handleRequest = (value: boolean) => {
    setRequest(value)
  }

  return (
    <div className="h-full flex flex-col justify-center">
      <h4 className="uppercase text-3xl pt-5 pb-5 font-Norwester">Request for Access</h4>
      {!request && <><AccessRequestForm />
      <button className="uppercase bg-gradient-to-r to-[#DC9B27] from-[#D14E30] px-10 py-3 rounded-xl font-Norwester w-56" onClick={() => handleRequest(true)}>get on the whitelist</button></>}
      {request && <AccessRequestSent />}
    </div>
  )
}

export default AccessRequestPage