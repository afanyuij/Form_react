
export function Navbar({userStatus, handleUser,showAbout,handleAbout}){
    console.log(userStatus)
   
    
   
    return (
        <div>
            <div className="navbar flex justify-between items-center p-2 bg-slate-800">
                <div className="logo">
                    <h1 className="text-cyan-100 text-3xl font-bold">Movie<span className="text-red-200">Site</span></h1>
                </div>
                <div className="navitems flex gap-4 text-white">
                    
                    <a onClick={()=>handleAbout(true)} className="hover:bg-blue-500 p-2 duration-200 hover:rounded-md cursor-pointer">Home</a> 

                    <a onClick={()=>handleAbout(false)} className="hover:bg-blue-500 p-2 duration-200 hover:rounded-md cursor-pointer">About</a>
                    
                    <a className="hover:bg-blue-500 p-2 duration-200 hover:rounded-md cursor-pointer">FeedBack</a>
                </div>
                <div className="btns flex gap-3">
                   
                    <button onClick={()=>handleUser(!userStatus)} className="bg-blue-500 rounded-md text-white p-2 duration-200 hover:scale-[1.1]">Login</button>

                    <button onClick={()=>handleUser(!userStatus)} className="bg-red-500 rounded-md text-white p-2 duration-200 hover:scale-[1.1]">Logout</button>
                    
                </div>
            </div>
        </div>
    )
}