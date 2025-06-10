import StartBox from './startBox'
import reactlogo from "../assets/react.svg"
import { Input } from "@/components/ui/input"
import { FaSearch } from "react-icons/fa";
import { SalesOverview } from './salesoverview';
import { FaArrowTrendUp } from "react-icons/fa6";



export const Dashboard = () => {
  return (
   <div className='w-full h-screen flex flex-col p-4'>

     <div className="flex  items-center p-2 pb-4">
     <p className="text-gray-200 mr-8">Dashboard</p>

  <div className="relative">
    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
      <FaSearch className='text-white'/>
    </span>
    <Input
      type="text"
      placeholder="Search here"
      className="pl-10 " 
    />
  </div>
</div>



     <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4  row-start-[auto]'>
        <StartBox logo={reactlogo} date="7 days" value="$10,2340" title="Total Revenue" profit={10}/>
        <StartBox logo={reactlogo} date="7 days" value="1000" title="Total Transaction" profit={23}/> 
          <StartBox logo={reactlogo} date="7 days" value="60%" title="Quaterly Income" profit={34}/>
          <StartBox logo={reactlogo} date="7 days" value="21200" title="New Orders" profit={25}/>

       <div className="col-span-2">
    <SalesOverview
      title="Sales Overview"
      data1="40000"
      data2="43433"
      data3="33232"
      data4="4322"
      data5="43,434"
    />
  </div>
       
      <StartBox logo={reactlogo} date="week" value="699" title="New Customers" profit={36}/>
      <StartBox logo={reactlogo} date="week" value="$69,999" title="Total Profit" profit={16}/>
       



       <div className="md:col-span-2 md:col-start-3 row-start-[auto]">
  <div className="bg-darkblue-400 rounded-lg p-2 max-h-30">
    <div className="flex justify-between items-center mb-2">
      <img src={reactlogo} alt="logo" className="h-8 w-8" />
      <h3 className="text-gray-300">Total Profit</h3>
    </div>
    <div className="flex justify-between">
      <h2 className="text-gray-100">fswefw</h2>
      <div className="flex items-center">
        <FaArrowTrendUp className="text-green-500 mr-1" />
        <span className="flex text-green-500 mr-1">ewfwef</span>
      </div>
    </div>
    <p className="text-gray-300">ewewfw</p>
  </div>
</div>

    </div>
   </div>
  )
}
