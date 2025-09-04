import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"];

export const PieChartPage = () => {
  const mockData = [
    { name: "Shoes", value: 240 },
    { name: "Clothing", value: 130 },
    { name: "Sports", value: 300 },
    { name: "Shorts", value: 180 },
  ];

  const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const totalSales = mockData.reduce((sum, item) => sum + item.value, 0);

  const formattedData = mockData.map(item => ({
    ...item,
    percentage: (item.value / totalSales) * 100,
  }));

  const largestCategory = formattedData.reduce(
    (prev, current) => (prev.value > current.value ? prev : current),
    formattedData[0]
  );

  return (
    <div className="p-4 w-full h-screen flex flex-col items-center">
      <h2 className="text-white text-3xl mb-4 font-bold">
        Sales Distribution by Category
      </h2>
      <p className="text-white text-sm mb-6 text-center italic max-w-lg">
        This chart visualizes the breakdown of total sales across different
        product categories. Each slice represents a category's contribution to
        the overall revenue, with the size of the slice proportional to its
        sales.
      </p>

      <div className="w-full flex-grow flex justify-center items-center">
        <ResponsiveContainer width="100%" height="80%">
          <PieChart>
            <Pie
              data={formattedData}
              dataKey="value"
              nameKey="name"
              outerRadius={120}
              label={({ name, value, percentage }) =>
                `${name}: ${currencyFormatter.format(value)} (${percentage.toFixed(1)}%)`
              }
            >
              {formattedData.map((entry, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value, name, props) => [
                currencyFormatter.format(value as number),
                name,
              ]}
            />
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-8 p-4 bg-gray-800 rounded-lg w-full max-w-lg">
        <h3 className="text-white text-lg font-semibold mb-2">Key Insights:</h3>
        <ul className="list-disc list-inside text-gray-300">
          <li>
            The total sales across all categories amount to{" "}
            <span className="font-bold">
              {currencyFormatter.format(totalSales)}
            </span>.
          </li>
          <li>
            The <span className="font-bold">{largestCategory.name}</span>{" "}
            category is the largest contributor, making up{" "}
            <span className="font-bold">
              {largestCategory.percentage.toFixed(1)}%
            </span>{" "}
            of total sales with{" "}
            <span className="font-bold">
              {currencyFormatter.format(largestCategory.value)}
            </span>.
          </li>
          <li>Hover over the slices to see specific values for each category.</li>
        </ul>
      </div>
    </div>
  );
};
