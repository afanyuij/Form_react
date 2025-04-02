
export default function App(){
  return (
    <div className="gif-bg h-screen w-full flex items-center justify-center text-white text-2xl ">

      <div className="pop w-[60%] ">
        <h1 className="text-7xl text-center">Welcome back user</h1>

      </div>
     <div className="flex justify-left w-[40%] ">

      <form className="flex flex-col gap-4 w-[60%] bg-fuchsia-900/80 rounded-4xl  shadow-2xl border-none p-10
      backdrop-blur-md bg-gradient-to-r from-indigo-900/80 via-fuchsia-700/50 to-fuchsia-950/80 border border-white/20
      ">
        <h1 className="text-4xl font-extrabold block text-center mt-3 mb-6 tracking-wider">Sign<span className="text-fuchsia-100 pop">In</span></h1>
        
        <div className="flex w-full mb-4 justify-center">
        
        <img src="/public/icons8-user-100 (1).png" className="w-[100px] " alt="" srcset="" />

        </div>
        <input type="text" placeholder="Enter your Email" className="p-3 text-[18px] pop rounded-4xl bg-gradient-to-r from-fuchsia-600/40 via-fushsia-400/50 to-indigo-600/30  border border-white/20 backdrop-blur-md shadow-lg  mb-2 bg-fuchsia-800/80 text-white outline-none " />
        <input type="password" placeholder="Enter your Password" className="text-[18px] pop outline-none p-3  mb-2 bg-fuchsia-800/80 text-white rounded-4xl bg-gradient-to-r from-fuchsia-600/40 via-fushsia-400/50 to-indigo-600/30  border border-white/20 backdrop-blur-md shadow-lg" />
        <div className="flex w-full justify-center mb-3">

        <button className="bg-fuchsia-500 bg-gradient-to-r from-indigo-500/80 via-fuchsia-200/40 to-fuchsia-700/70 backdrop-blur-md shadow-lg border border-white/20 hover:scale-[1.1] cursor-pointer duration-300 text-white  pop w-[50%] p-2 rounded-2xl ">Login</button>
        </div>
        <p className="text-white text-sm text-center">Don't have an account <span className="text-fuchsia-100 underline cursor-pointer text-lg">Register</span></p>
      </form>
   
     </div>
    </div>
  )
}