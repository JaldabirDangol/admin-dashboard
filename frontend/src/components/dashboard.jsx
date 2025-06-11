import StartBox from './startBox'
import { Input } from "@/components/ui/input"
import { FaSearch } from "react-icons/fa";
import { SalesOverview } from './salesoverview';
import { HiOutlineDotsVertical } from "react-icons/hi";
import {LineChart,Line,XAxis,YAxis,CartesianGrid,Tooltip,Legend, ResponsiveContainer,
} from "recharts";
import OrdersTable from './ordertable';
import { TbMoneybag } from "react-icons/tb";
import { AiOutlineTransaction } from "react-icons/ai";
import { IoPeopleSharp } from "react-icons/io5";
import { IoBagCheck } from "react-icons/io5";
import { HiOutlineChartBar } from "react-icons/hi";

export const Dashboard = () => {
const data = [
  { name: "Jan", sales: 4000 },
  { name: "Feb", sales: 3000 },
  { name: "Mar", sales: 5000 },
  { name: "Apr", sales: 2780 },
  { name: "May", sales: 3890 },
  { name: "Jun", sales: 4490 },
];
  return (
   <div className='w-full h-full flex flex-col p-4'>

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

     <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4  row-start-[auto] mb-8'>
          <StartBox logo={<TbMoneybag className='w-8 h-8 text-orange-400'/>} date="7 days" value="$10,2340" title="Total Revenue" profit={10}/>
        <StartBox logo={<AiOutlineTransaction className='w-8 h-8 text-green-400' />
} date="7 days" value="1000" title="Total Transaction" profit={23}/> 
          <StartBox logo={<HiOutlineChartBar className='w-8 h-8 text-green-400'/>} date="7 days" value="60%" title="Quaterly Income" profit={34}/>
          <StartBox logo={<IoBagCheck  className='w-8 h-8 text-yellow-400'/>
} date="7 days" value="21200" title="New Orders" profit={25}/>
        </div>

       <div className="flex">
         <div className='mr-6 w-full '>
            <SalesOverview
      title="Sales Overview"
      data1="40000"
      data2="43433"
      data3="33232"
      data4="4322"
      data5="43,434"
        />
         </div>

         <div className='flex flex-col w-full '>
      <div className='grid grid-cols-1 gap-4 mb-4 sm:grid-cols-1 md:grid-cols-2'>
        <StartBox logo={<IoPeopleSharp 
 className='w-8 h-8 text-gray-300'/>
} date="week" value="699" title="New Customers" profit={36}/>
      <StartBox logo={<TbMoneybag className='w-8 h-8 text-green-400'/>} date="week" value="$69,999" title="Total Profit" profit={16}/>
      </div>

      
  <div className="bg-darkblue-400 rounded-lg p-2 h-70 hidden md:flex flex-col ">
    <div className='flex justify-between items-center mb-2 '>
         <h3 className="text-gray-200 pl-4"> Line Chart </h3>
<HiOutlineDotsVertical className='text-white mr-4'/>
    </div>
        

        <div className='flex-grow'>
            <ResponsiveContainer width="100%" height="99%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
          <XAxis dataKey="name" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="sales"
            stroke="#8884d8"
            strokeWidth={2}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
        </div>
      
</div>
         </div>
  </div>
  <OrdersTable/>
   </div>
  )
}
