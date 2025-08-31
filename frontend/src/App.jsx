import AuthPage from "./components/authpage"
import { Dashboard } from "./components/dashboard"
import { LeftSideBar } from "./components/leftsidebar"
import { Routes, Route ,useLocation  } from "react-router-dom"
import { UserTable } from "./components/manageuser";
import { UserPage } from "./components/userpage";
import {BarChartPage} from "./components/BarChartPage"
import {PieChartPage} from "./components/PieChartPage"
import ProtectedRoutes from "./components/protectedroutes";
import { WorldMapPage } from "./components/WorldMapPage";

function App() {
    const location = useLocation();

  console.log(location.pathname)
  return (
    <div className="min-h-[100vh] w-full flex">
      <div className={`h-screen  w-[15%]  ${location.pathname === '/auth' ? 'hidden ':'block'}`}>
        <LeftSideBar/>
      </div>
      <main className={`bg-dark-700 h-full p-1 md:p-4 md:pr-5 overflow-y-auto scrollbar-hide ${["/auth", "world-map"].includes(location.pathname) ? 'w-full ':'w-[85%]'}`}>
        <Routes>
          <Route path="/" element={<ProtectedRoutes><Dashboard /></ProtectedRoutes >} />
          <Route path="/overview" element={<ProtectedRoutes><Dashboard /></ProtectedRoutes >} />
          <Route path="/auth" element={<AuthPage/>} />
          <Route path="/customers" element={<ProtectedRoutes><UserTable/></ProtectedRoutes >} />
          <Route path="/userpage" element={<ProtectedRoutes><UserPage/></ProtectedRoutes >} />
          <Route path="/bar-chart" element={<ProtectedRoutes><BarChartPage/></ProtectedRoutes >} />
          <Route path="/pie-chart" element={<ProtectedRoutes><PieChartPage/></ProtectedRoutes >} />
          <Route path="/world-map" element={<ProtectedRoutes><WorldMapPage/></ProtectedRoutes >} />
        </Routes>
      </main>
    </div>
  )
}
 
export default App