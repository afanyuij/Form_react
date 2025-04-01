import { useState } from "react"
import { Navbar } from "./Navbar"
import { Maingrid } from "./Maingrid"
export function Homepage(){
  const [userStatus, setUserStatus] = useState(false)
  const [showAbout, setShowAbout]=useState(false)
  return(
    <div className="w-[100%]">
      <Navbar userStatus={userStatus} handleUser ={setUserStatus} showAbout={showAbout} handleAbout={setShowAbout} />
 
    <div className="">
      
      <Maingrid showAbout={showAbout} handleAbout={setShowAbout} />
    </div>
      
    </div>
  )
}