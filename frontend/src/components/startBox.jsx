import { FaArrowTrendUp  ,FaArrowTrendDown} from "react-icons/fa6";

function StartBox({logo,title,value,date,profit}){

    return(
        <div className="bg-darkblue-400 rounded-lg p-2 max-h-30">
            <div className="flex justify-between items-center mb-2">
                    <span>{logo}</span>
                   <h3 className="text-gray-300">{title}</h3> 
             </div>
             <div className="flex justify-between">
                   <h2 className="text-gray-100">{value}</h2> 
                  <div className="flex items-center">


           {
            profit>0 ?  <FaArrowTrendUp className="text-green-500 mr-1"/> :  <FaArrowTrendDown className="text-red-500 mr-1"/>
           }


                {profit > 0 ?  <span  className="flex text-green-500 mr-1">{profit}% </span> 
                :  <span  className="flex text-red-500 mr-1">{profit}% </span>
}
                  </div>
             </div>
         <p className="text-gray-300"> last {date}</p>
        </div>
    )
}


export default StartBox;