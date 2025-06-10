import { CiGrid42 } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { IoMdPeople } from "react-icons/io";
import { RiBarChartFill } from "react-icons/ri";
import { FaChartPie } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";



import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../components/ui/avatar.jsx";

export const LeftSideBar = () => {
  const sideBarItems = [
    {
      logo: <CiGrid42 size={24}  className="text-white"/>,
      title: "Overview",
    },
    {
      logo: <IoMdPeople size={24} className="text-white"/>,
      title: "Customers",
    },
    {
      logo: <RiBarChartFill  size={24} className="text-white"/>,
      title: "Bar chart",
    },
  {
      logo: <FaChartPie  size={24} className="text-white"/>,
      title: "Pie chart",
    },
 {
      logo: <GiWorld   size={24} className="text-white"/>,
      title: "Bar chart",
    },
    {
      logo: <CiSettings size={24} className="text-white"/>,
      title: "Setting",
    },
  ];

  const user = {
    name:"jaldabir"
  }
  return (
    <div className="h-screen bg-darkblue-400 p-2">
      <div className="flex pt-5 p-4 items-center" >
        <Avatar>
          <AvatarImage src={user?.profile}/>
          <AvatarFallback> profile</AvatarFallback>
        </Avatar>
         <span className="text-gray-100 pl-4 text-2xl"> {user?.name}</span>
      </div>

      <div className="flex flex-col gap-4 p-4">
        {sideBarItems.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            {item.logo}
            <span className="text-gray-200">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
