import { HiOutlineDotsVertical } from "react-icons/hi";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  PieChart,
  Pie,
  Tooltip,
  Cell,
} from "recharts";
const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"];

export const SalesOverview = ({ title, data1, data2, data3, data4 ,data5 }) => {
  const data = [
    { name: "Shoes", value: Number(data1) },
    { name: "Clothing", value: Number(data2) },
    { name: "Sportswear", value: Number(data3) },
    { name: "Shorts", value: Number(data4) },
  ];
  return (
    <div className="cols-span-2 bg-darkblue-400 ">
      <div className="flex justify-between p-2">
        <span className="text-gray-200">{title}</span>
        <HiOutlineDotsVertical className="text-white" />
      </div>
   
      <div className="flex justify-between">
        <PieChart width={300} height={300}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={90}
            fill="#8884d8"
            dataKey="value"
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>

          <div className="flex flex-col">
              <div className="pr-20">
          <span className="text-gray-300 "> Number of sales </span>
          <p className="text-gray-300  text-xl"> ${data5}</p>
              </div>

  <div className="grid grid-cols-2 gap-y-4 text-white text-sm pt-16 pr-6" >
 
  <div className="flex items-center gap-2">
    <span className="w-4 h-4 rounded-full bg-indigo-500"></span>
    <div>
      <p>Shop</p>
      <p className="text-gray-400">$40,200</p>
    </div>
  </div>

  <div className="flex items-center gap-2">
    <span className="w-4 h-4 rounded-full bg-purple-500"></span>
    <div>
      <p>Clothing</p>
      <p className="text-gray-400">$35,150</p>
    </div>
  </div>

  <div className="flex items-center gap-2">
    <span className="w-4 h-4 rounded-full bg-green-500"></span>
    <div>
      <p>Sportswear</p>
      <p className="text-gray-400">$15,100</p>
    </div>
  </div>

          <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded-full bg-cyan-500"></span>
         <div>
      <p>Shoes</p>
      <p className="text-gray-400">$10,500</p>
        </div>
  </div>
</div>

          </div>


      </div>
    </div>
  );
};
