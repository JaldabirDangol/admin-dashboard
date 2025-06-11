import { useState } from "react";
import { useGetAllUsers } from "../hooks/useGetAllUsers";
import axios from "axios";
import { backendurl } from "../../configurl";
import { toast } from "sonner";

export const UserTable = () => {
  const [users, setUsers] = useState([]);
  useGetAllUsers({ setUsers });

  const roleHandler = async (userId, newRole) => { 
    try {
      const res = await axios.post(
        `${backendurl}/api/v1/user/changerole/${userId}`,
        { newRole }, 
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (res.data.success) {
        toast(res.data.msg);
        // Optimistically update the UI or refetch users to show the new role
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user._id === userId ? { ...user, role: newRole } : user
          )
        );
      }
    } catch (error) {
      console.error("Error changing role:", error); 
      toast.error("Failed to change role."); 
    }
  };

  return (
    <div className="p-4 w-full h-screen overflow-y-auto scrollbar-hide ">
      <h2 className="text-xl font-semibold mb-4 text-gray-200">User Table</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="py-2 px-4 border-b-2 ">ID</th>
            <th className="py-2 px-4 border-b-2 ">Username</th>
            <th className="py-2 px-4 border-b-2 ">Email</th>
            <th className="py-2 px-4 border-b-2 ">Role</th>
            <th className="py-2 px-4 border-b-2 ">Actions</th> 
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id} className="border-b">
              <td className="py-2 px-4 text-gray-200">{user._id}</td>
              <td className="py-2 px-4 text-gray-200">{user.username}</td>
              <td className="py-2 px-4 text-gray-200">{user.email}</td>
              <td className="py-2 px-4 text-gray-200">{user.role}</td>
              <td className="py-2 px-4">
                <select
                  value={user.role} 
                  onChange={(e) => roleHandler(user._id, e.target.value)}
                  className="bg-gray-700 text-white p-1 rounded"
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};