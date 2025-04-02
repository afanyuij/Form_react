
export default function App(){
  return (
    <div className="gif-bg h-screen w-full flex items-center justify-center text-white text-2xl ">
     
      <form className="flex flex-col gap-4 w-[27%] bg-fuchsia-900/80 rounded-4xl backdrop:backdrop-blur-lg shadow-2xl border-none p-10 ">
        <h1 className="text-4xl font-extrabold block text-center mt-3 mb-6 tracking-wider">Sign<span className="text-fuchsia-100 pop">In</span></h1>
        
        <div className="flex w-full mb-4 justify-center">
        
        <img src="/public/icons8-user-100 (1).png" className="w-[100px] " alt="" srcset="" />

        </div>
        <input type="text" placeholder="Enter your Email" className="p-3 text-[18px] pop rounded-4xl border border-fuchsia-400  mb-2 bg-fuchsia-800/80 text-white outline-none " />
        <input type="password" placeholder="Enter your Password" className="text-[18px] pop outline-none p-3 border border-fuchsia-400 mb-2 bg-fuchsia-800/80 text-white rounded-4xl" />
        <div className="flex w-full justify-center mb-3">

        <button className="bg-fuchsia-500 hover:scale-[1.1] cursor-pointer duration-300 text-white  pop w-[50%] p-2 rounded-2xl ">Login</button>
        </div>
        <p className="text-white text-sm text-center">Don't have an account <span className="text-fuchsia-100 underline cursor-pointer text-lg">Register</span></p>
      </form>
   
    </div>
  )
}