
export function Navbar({userStatus}){
    console.log(userStatus)
   
    return (
        <div>
            <div className="navbar flex justify-between items-center p-2 bg-slate-800">
                <div className="logo">
                    <h1 className="text-white text-3xl">Logo</h1>
                </div>
                <div className="navitems flex gap-4 text-white">
                    <a className="hover:bg-blue-500 p-2 duration-200 hover:rounded-md" href="">Home</a>
                    <a className="hover:bg-blue-500 p-2 duration-200 hover:rounded-md" href="">About</a>
                    <a className="hover:bg-blue-500 p-2 duration-200 hover:rounded-md" href="">FeedBack</a>
                </div>
                <div className="btns flex gap-3">
                    {userStatus?
                    <button className="bg-blue-500 rounded-md text-white p-3">Login</button>: 

                    <button className="bg-red-500 rounded-md text-white p-3">Logout</button>
                    }
                </div>
            </div>
        </div>
    )
}