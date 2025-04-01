export function Maingrid(){
    return(
        <div className="w-full items-center flex gap-10 bg-gray-800 shadow-2xl p-4 justify-center ">
        
        {[0,1,2,3,4].map((data)=>{
         return(

            <div key={data} className="p-3 rounded-md bg-cyan-900 w-[15%]">
                <div className="">
                    
                <img src="https://lh5.googleusercontent.com/proxy/0S4QJXXW2mYDEB-ynyCfOrY9_MuvTXYUL0deDoNNGI_MM1AaZFkl6WgEjq9peely1bIkqlmw2cljHvBm46jVjCit7FsJWpyBAFtEPQLN" className="p-4 w-full h-86" alt="" srcset="" />
                <h3 className="font-bold text-white text-2xl block text-center">Kraven the Hunter</h3>
                <p className="text-gray-200 block text-center">Kraven's complex relationship with his ruthless father, Nikolai Kravinoff, starts him down</p>
                </div>
            </div>
            )
            
        })}
        
        </div>
    )
}