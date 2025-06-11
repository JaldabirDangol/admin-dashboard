import { useState } from "react";
import { useGetAllUsers } from "../hooks/useGetAllUsers";
import axios from "axios";
import { backendurl } from "../../configurl";
import { toast } from "sonner";

export const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [newRole,setNewRole] = useState("admin");
  useGetAllUsers({ setUsers });

  const roleHandler = async (userId) => {
    try {
      const res = await axios.post(
        `${backendurl}/api/v1/user/changerole/${userId}`,{newRole},
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (res.data.success) {
        toast(res.data.msg);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4 text-gray-200">User Table</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="py-2 px-4 border-b-2 ">ID</th>
            <th className="py-2 px-4 border-b-2 ">Username</th>
            <th className="py-2 px-4 border-b-2 ">Email</th>
            <th className="py-2 px-4 border-b-2 ">Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-b">
              <td className="py-2 px-4 text-gray-200">{user._id}</td>
              <td className="py-2 px-4 text-gray-200">{user.username}</td>
              <td className="py-2 px-4 text-gray-200">{user.email}</td>
              <td
                onClick={roleHandler(user._id)}
                className="py-2 px-4 text-gray-200"
              >
                {user.role}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
