
function StartBox({logo,title,value,date}){

    return(
        <div className="bg-darkblue-400 rounded-lg">
            <div className="flex justify-between items-center mb-2">
                   <img src={logo} alt="logo" className="h-8 w-8"/>
                   <h3 className="text-white">${title}</h3> 
             </div>
             <div className="flex justify-between">
                   <h2>${value}</h2> 
             </div>
         <p>last ${date}</p>
        </div>
    )
}


export default StartBox;