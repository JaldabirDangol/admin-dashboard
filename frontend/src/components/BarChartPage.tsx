import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export const BarChartPage = () => {
  const mockData = [
    { month: "Jan", sales: 400 },
    { month: "Feb", sales: 300 },
    { month: "Mar", sales: 600 },
    { month: "Apr", sales: 200 },
  ];

  return (
    <div className="p-4 w-full h-[400px]">
      <h2 className="text-white text-xl mb-4">Sales by Month</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={mockData}>
          <XAxis dataKey="month" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip />
          <Bar dataKey="sales" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
