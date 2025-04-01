import { useState } from "react"
import { Navbar } from "./Navbar"
import { Maingrid } from "./Maingrid"
export function Homepage(){
  const [userStatus, setUserStatus] = useState("")
  return(
    <div className="h-[100%] w-full">
      <Navbar userStatus={userStatus} handleStatus ={setUserStatus} />
 
    <div className="flex items-center h-full jusity-center w-full">

      <Maingrid />
    </div>
      
    </div>
  )
}