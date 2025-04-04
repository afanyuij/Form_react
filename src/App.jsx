import { useState } from "react"
import { Login } from "./components/Login"
import { Register } from "./components/Register"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"


export default function App(){
  const [active, setActive]=useState("login")
  return (
    
    <BrowserRouter>
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={"Page not found"} />

      </Routes>
    </BrowserRouter>
    
  )
}