import React from "react";

const orders = [
  {
    name: "Williams Wright",
    date: "2024/03/15",
    price: "$10,500",
    status: "Pending",
    avatar: "🧑‍🦰",
  },
  {
    name: "Mason Adams",
    date: "2024/04/17",
    price: "$20,200",
    status: "Cancelled",
    avatar: "👨🏻",
  },
  {
    name: "Emily Allen",
    date: "2024/05/15",
    price: "$350,400",
    status: "Pending",
    avatar: "👩🏻",
  },
  {
    name: "Sophia Barnes",
    date: "2024/07/20",
    price: "$100,500",
    status: "Completed",
    avatar: "👩🏼",
  },
];

const statusColors = {
  Pending: "bg-yellow-600 text-yellow-100",
  Cancelled: "bg-red-700 text-red-100",
  Completed: "bg-green-700 text-green-100",
};

const OrdersTable = () => {
  return (
    <div className="p-6 bg-darkblue-400 mt-4 min-h-[40%] text-white">
      <div className="text-2xl font-semibold mb-4">Orders</div>

      <div className="flex gap-6 mb-4 text-gray-300">
        <button className="text-cyan-400">Recent</button>
        <button>Pending</button>
        <button>Completed</button>
        <button>Cancelled</button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-separate border-spacing-y-3">
          <thead>
            <tr className="text-gray-300">
              <th>Name</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, idx) => (
              <tr key={idx} className="bg-[#2A2751] rounded-lg">
                <td className="flex items-center gap-3 py-4 px-2">
                  <span className="text-2xl">{order.avatar}</span>
                  <span>{order.name}</span>
                </td>
                <td className="px-2">{order.date}</td>
                <td className="px-2">{order.price}</td>
                <td className="px-2">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${statusColors[order.status]}`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-2 text-cyan-400 cursor-pointer">View</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersTable;
