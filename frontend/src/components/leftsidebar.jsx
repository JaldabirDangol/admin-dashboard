import { CiGrid42 } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { IoMdPeople } from "react-icons/io";
import { RiBarChartFill } from "react-icons/ri";
import { FaChartPie } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';
import { AiOutlineLogout } from "react-icons/ai";


import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../components/ui/avatar.jsx";
import { useState } from "react";

export const LeftSideBar = () => {
  const navigate = useNavigate();
  const [selectedItem, setSelecteditem] = useState("overview");
  const sideBarItems = [
  {
    logo: <CiGrid42 size={24} className="text-white" />,
    title: "Overview",
    path: "/overview",
  },
  {
    logo: <IoMdPeople size={24} className="text-white" />,
    title: "Customers",
    path: "/customers",
  },
  {
    logo: <RiBarChartFill size={24} className="text-white" />,
    title: "Bar chart",
    path: "/bar-chart",
  },
  {
    logo: <FaChartPie size={24} className="text-white" />,
    title: "Pie chart",
    path: "/pie-chart",
  },
  {
    logo: <GiWorld size={24} className="text-white" />,
    title: "World Map",
    path: "/world-map",
  },
  {
    logo: <CiSettings size={24} className="text-white" />,
    title: "Settings",
    path: "/settings",
  },
    {
    logo: <AiOutlineLogout  size={24} className="text-white" />,
    title: "Log Out",
    path: "/login",
  }
];

 const handleSidebarItemClick = (item) => {
  navigate(item.path);
  setSelecteditem(item.title)
};

  const user = {
    name:"jaldabir"
  }
  return (
    <div className="h-screen p-2 fixed overflow-y-auto scrollbar-hide bg-darkblue-400  w-[15%] ">
      <div className="flex pt-5 p-2 md:p-4 items-center" >
        <Avatar>
          <AvatarImage src={user?.profile}/>
          <AvatarFallback> profile</AvatarFallback>
        </Avatar>
         <span className="text-gray-100 pl-4 text-2xl hidden md:block"> {user?.name}</span>
      </div>

      <div className="flex flex-col gap-4 md:p-4">
        {sideBarItems.map((item, index) => (
          <div onClick={() => handleSidebarItemClick(item)} key={index}
           className={`md:flex sm:pl-2 items-center gap-2 ${selectedItem === item.title ? 'bg-dark-400 text-white cursor-pointer' : 'hover:bg-dark-800 text-gray-200 rounded-2xl p-2 cursor-pointer'   }`}>
            {item.logo}
            <span className="text-gray-200 hidden md:block">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
