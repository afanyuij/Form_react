
export function Register(){
    return (
    //   <div className="gif-bg h-screen w-full p-9 text-white text-2xl ">
        <div className="flex justify-center  items-center text-white">
  
        <div className="pop w-[60%] mt-14">
          <div className="flex justify-center items-center mb-5">
  
          <img src="/public/icons8-playerme-100.png" className="w-[100px]" alt=""  />
          <h1 className="text-7xl font-bold bg-gradient-to-r from-gray-100 via-fuchsia-300 to-yellow-400 text-transparent bg-clip-text pop  text-center">Universe</h1>
          </div>
          <p className="pop text-center mb-5">Discover, create, and experience music like never before.</p>
          <div className="flex gap-1 justify-center items-center">
          <p className="pop text-center text-fuchsia-300">Start Creating now</p>
          <img src="/public/icons8-arrow-right-48 (1).png" alt="" srcset="" />
  
          </div>
         
        </div>
       <div className="flex justify-left w-[40%] ">
  
        <form className="flex flex-col gap-4 w-[60%] bg-fuchsia-900/80 rounded-4xl mt-18 shadow-2xl border-none p-10
        backdrop-blur-md bg-gradient-to-r from-indigo-900/80 via-fuchsia-700/50 to-fuchsia-950/80 border border-white/20
        ">
          <h1 className="text-4xl font-extrabold block text-center mt-3 mb-6 bg-clip-text bg-gradient-to-r text-transparent from-white via-gray-200 to-yellow-300 tracking-wider">SignUp</h1>
          
          <div className="flex w-full mb-4 justify-center">
          
          <img src="/public/icons8-user-100 (1).png" className="w-[100px] " alt="" srcset="" />
  
          </div>
          <input type="text" placeholder="Enter your First name" className="p-2 text-[16px] pop rounded-4xl bg-gradient-to-r from-fuchsia-600/40 via-fushsia-400/50 to-indigo-600/30  border border-white/20 backdrop-blur-md shadow-lg  mb-2 bg-fuchsia-800/80 text-white outline-none " />
          <input type="text" placeholder="Enter your Last name" className="text-[16px] pop outline-none p-2  mb-2 bg-fuchsia-800/80 text-white rounded-4xl bg-gradient-to-r from-fuchsia-600/40 via-fushsia-400/50 to-indigo-600/30  border border-white/20 backdrop-blur-md shadow-lg" />
          <input type="tel" placeholder="Enter your Phone number" className="text-[16px] pop outline-none p-2  mb-2 bg-fuchsia-800/80 text-white rounded-4xl bg-gradient-to-r from-fuchsia-600/40 via-fushsia-400/50 to-indigo-600/30  border border-white/20 backdrop-blur-md shadow-lg" />
          <input type="password" placeholder="Enter your Password" className="text-[16px] pop outline-none p-2  mb-2 bg-fuchsia-800/80 text-white rounded-4xl bg-gradient-to-r from-fuchsia-600/40 via-fushsia-400/50 to-indigo-600/30  border border-white/20 backdrop-blur-md shadow-lg" />
          <input type="password" placeholder=" confirm Password" className="text-[16px] pop outline-none p-2  mb-2 bg-fuchsia-800/80 text-white rounded-4xl bg-gradient-to-r from-fuchsia-600/40 via-fushsia-400/50 to-indigo-600/30  border border-white/20 backdrop-blur-md shadow-lg" />
          <div className="flex w-full justify-center mb-3">
  
          <button className="bg-fuchsia-500 bg-gradient-to-r from-indigo-500/80 via-fuchsia-200/40 to-fuchsia-700/70 backdrop-blur-md shadow-lg border border-white/20 hover:scale-[1.1] cursor-pointer duration-300 text-white  pop w-[50%] p-2 rounded-2xl ">Register</button>
          </div>
          <p  className="text-white text-sm text-center">Already have an account <span className="text-fuchsia-100 underline cursor-pointer text-lg">Login</span></p>
        </form>
        </div>
  
     
       </div>
      
    )
  }