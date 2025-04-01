export function Maingrid({ userStatus, handleUser, showAbout, handleAbout }) {
    return (
      <div>
        {showAbout ? 
        <>
            <h1 className="text-white p-6">Trending Movies 🔥</h1>
       
            <div className="w-full flex items-center gap-10 bg-gray-800 shadow-2xl p-4 justify-center">
            

              {[0, 1, 2, 3, 4].map((data) => (
                <div key={data} className="p-3 rounded-md bg-cyan-900 w-[15%]">
                  <div>
                    <img src="/images.jpeg" className="p-4 w-full h-[15%]" alt="Kraven the Hunter" />
                    <h3 className="font-bold text-white text-2xl text-center">Kraven the Hunter</h3>
                    <p className="text-gray-200 text-center">
                      Kraven's complex relationship with his ruthless father, Nikolai Kravinoff, starts him down
                    </p>
                  </div>
                </div>
              ))}
            </div>
          
            </>: 
          <div className="w-full p-3">
            <h1 className="block text-center text-cyan-200 text-4xl mb-20  font-extrabold">About <span className="text-red-200">MovieSite</span> </h1>
            <div className="w-full flex justify-center">
            <p className=" block text-center w-[70%] text-gray-100 ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                 Pariatur commodi ea nisi optio deserunt 
                sint eum voluptatem reiciendis vel. Maxime repellat dolorem eligendi 
                deserunt cupiditate. Repellat, at. Dicta, molestiae sit.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                 Pariatur commodi ea nisi optio deserunt 
                sint eum voluptatem reiciendis vel. Maxime repellat dolorem eligendi 
                deserunt cupiditate. Repellat, at. Dicta, molestiae sit.
            </p>
            </div>
            
          </div>
        }
      </div>
    );
  }
  