import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"];

export const PieChartPage = () => {
  const mockData = [
    { name: "Shoes", value: 240 },
    { name: "Clothing", value: 130 },
    { name: "Sports", value: 300 },
    { name: "Shorts", value: 180 },
  ];

  return (
    <div className="p-4 w-full h-[400px]">
      <h2 className="text-white text-xl mb-4">Category Distribution</h2>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={mockData} dataKey="value" outerRadius={120} label>
            {mockData.map((entry, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
