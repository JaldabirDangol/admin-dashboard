import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";

interface mockDataProps {
  month: string;
  sales: number;
}

export const BarChartPage = () => {
  const mockData: mockDataProps[] = [
    { month: "Jan", sales: 400 },
    { month: "Feb", sales: 300 },
    { month: "Mar", sales: 600 },
    { month: "Apr", sales: 200 },
    { month: "May", sales: 700 },
    { month: "Jun", sales: 800 },
  ];

  const maxSales = Math.max(...mockData.map((d) => d.sales));
  const minSales = Math.min(...mockData.map((d) => d.sales));
  const bestMonth: mockDataProps = mockData.find((d) => d.sales === maxSales)!;
  const worstMonth: mockDataProps = mockData.find((d) => d.sales === minSales)!;

  const lastMonth = mockData[mockData.length - 1];
  const firstMonth = mockData[0];

  const salesTrend =
    lastMonth.sales > firstMonth.sales ? "positive growth" : "negative trend";

  return (
    <div className="p-6 w-full">
      <h2 className="text-white text-2xl mb-4 text-center font-bold">
        Monthly Sales Report
      </h2>

      <p className="text-white text-sm mb-6 text-center italic">
        This bar chart presents our company's sales performance from{" "}
        {firstMonth.month} to {lastMonth.month}. It provides a straightforward
        overview of our revenue trends during this period, helping us track our
        performance.
      </p>

      {/* Chart container with fixed height */}
      <div className="w-full h-[400px] bg-gray-900 rounded-lg p-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={mockData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis
              dataKey="month"
              stroke="#ccc"
              label={{
                value: "Month",
                position: "insideBottom",
                fill: "#ccc",
                dy: 10,
              }}
            />
            <YAxis
              stroke="#ccc"
              label={{
                value: "Sales (in dollars)",
                angle: -90,
                position: "insideLeft",
                fill: "#ccc",
                dx: -10,
              }}
            />
            <Tooltip />
            <Bar dataKey="sales" fill="#82ca9d">
              <LabelList dataKey="sales" position="top" fill="#ccc" />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Insights section */}
      <div className="mt-8 p-4 bg-gray-800 rounded-lg shadow-lg">
        <h3 className="text-white text-lg font-semibold mb-2">Key Insights:</h3>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>
            <strong>{bestMonth.month}</strong> was our best-performing month with
            sales of <strong>${bestMonth.sales}</strong>, marking the highest
            revenue of the period.
          </li>
          <li>
            We experienced a significant drop in sales in{" "}
            <strong>{worstMonth.month}</strong>, reaching a low of{" "}
            <strong>${worstMonth.sales}</strong>.
          </li>
          <li>
            Overall, sales showed a <strong>{salesTrend}</strong> from{" "}
            {firstMonth.month} to {lastMonth.month}.
          </li>
        </ul>
      </div>
    </div>
  );
};
