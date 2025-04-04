export function MainNav(){
    return (
        <>
        <nav className="flex justify-between items-center p-2 px-12 bg-gradient-to-r from-cyan-950 via-black  to-fuchsia-900/80 shadow-lg backdrop-blur-md ">
        <div className="flex justify-center gap-6 items-center">
    
        <img src="/public/icons8-playerme-100.png" className="w-[50px]" alt=""  />
          <h1 className="text-2xl font-bold bg-gradient-to-r pop from-gray-100 via-fuchsia-300 to-yellow-400 text-transparent bg-clip-text pop  text-center">MusicUniverse</h1>
          
    </div>
    <div className="flex w-[40%] items-center">
    <input type="search" className="p-2 rounded-4xl bg-white w-[100%] px-5 pop outline-none text-gray-800 tracking-wide" placeholder="explore trending music 🔥" name="" id="" />
    <button className="p-3 px-3 bg-black text-white pop rounded-3xl">search</button>
    </div>
    
    <div className="flex justify-center items-center gap-6">
    <button onClick={()=>setActive("login")} className="bg-fuchsia-500 bg-gradient-to-r from-indigo-500/80 via-fuchsia-200/40 to-fuchsia-700/70 backdrop-blur-md shadow-lg  hover:scale-[1.1] cursor-pointer duration-300 text-white text-[17px] pop w-[50%] p-2 rounded-md ">SignIn</button>
  
    <button onClick={()=>setActive("register")} className="bg-fuchsia-500 bg-gradient-to-r from-indigo-500/80 via-fuchsia-200/40 to-fuchsia-700/70 backdrop-blur-md shadow-lg  hover:scale-[1.1] cursor-pointer duration-300 text-white text-[17px] pop w-[50%] p-2 rounded-md ">SignUp</button>
  
    </div>
        </nav>
        </>
    )
}