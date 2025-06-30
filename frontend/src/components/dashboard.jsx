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
import axios from "axios"
import {backendurl} from "../../configurl.js"
import { useState } from 'react';
import { useEffect } from 'react';

export const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);    

  
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${backendurl}/api/v1/data/dashboard`,{
          withCredentials:true
        });
        if (res.data.success) {
          setDashboardData(res.data.dashboardData);
        } else {
          setError('Failed to load dashboard data.');
        }
      } catch (err) {
        setError('Error fetching dashboard data.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); 

  
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
const monthlySales = dashboardData?.sixMonthSale
  ? months.map((month, idx) => ({
      name: month,
      sales: dashboardData.sixMonthSale[idx]
    }))
  : [];

const data = monthlySales;


  if (loading) return <div>Loading...</div>;
   if (error) return <div>{error}</div>;
  
  return (
   <div className='w-full h-full flex flex-col p-2 md:p-4'>

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
          <StartBox logo={<TbMoneybag className='w-8 h-8 text-orange-400'/>} date="7 days" value={dashboardData.totalRevenue.amount} title="Total Revenue" profit={dashboardData.totalRevenue.changePercent}/>
          <StartBox 
    logo={<AiOutlineTransaction className='w-8 h-8 text-green-400' />} 
    date="7 days" 
    value={dashboardData.totalTransaction.count} 
    title="Total Transaction" 
    profit={dashboardData.totalTransaction.changePercent} 
  />

  <StartBox 
    logo={<HiOutlineChartBar className='w-8 h-8 text-green-400' />} 
    date="7 days" 
    value={`${dashboardData.quarterlyIncome.incomePercent}%`} 
    title="Quarterly Income" 
    profit={dashboardData.quarterlyIncome.changePercent} 
  />

  <StartBox 
    logo={<IoBagCheck className='w-8 h-8 text-yellow-400' />} 
    date="7 days" 
    value={dashboardData.newOrders.count} 
    title="New Orders" 
    profit={dashboardData.newOrders.changePercent} 
  />
        </div>

       <div className="flex">
         <div className='mr-6 w-full '>
            <SalesOverview
      title="Sales Overview"
       data1={dashboardData.salesOverview.sales[0]} 
  data2={dashboardData.salesOverview.sales[1]} 
  data3={dashboardData.salesOverview.sales[2]} 
  data4={dashboardData.salesOverview.sales[3]} 
  data5={dashboardData.salesOverview.totalItems.toLocaleString()}
  totalRevenue30Days={dashboardData.salesOverview.totalRevenue30Days}
        />
         </div>

         <div className='flex flex-col w-full '>
      <div className='grid grid-cols-1 gap-4 mb-4 sm:grid-cols-1 md:grid-cols-2'>
         <StartBox 
    logo={<IoPeopleSharp className='w-8 h-8 text-gray-300' />} 
    date="week" 
    value={dashboardData.newCustomers.count} 
    title="New Customers" 
    profit={dashboardData.newCustomers.changePercent} 
  />

  <StartBox 
    logo={<TbMoneybag className='w-8 h-8 text-green-400' />} 
    date="week" 
    value={`$${dashboardData.totalProfit.amount.toLocaleString()}`} 
    title="Total Profit" 
    profit={dashboardData.totalProfit.changePercent} 
  />
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
