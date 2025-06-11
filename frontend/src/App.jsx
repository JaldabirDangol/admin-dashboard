import AuthPage from "./components/authpage"
import { Dashboard } from "./components/dashboard"
import { LeftSideBar } from "./components/leftsidebar"
import { Routes, Route ,useLocation  } from "react-router-dom"
import { UserTable } from "./components/manageuser";

function App() {
    const location = useLocation();

  return (
    <div className="h-full w-full flex">
      <div className={`h-screen  w-[15%]  ${location.pathname === '/auth' ? 'hidden ':'block'}`}>
        <LeftSideBar/>
      </div>
      <main className={`bg-dark-700 h-full p-4 md:pr-5 overflow-y-auto scrollbar-hide ${location.pathname === '/auth' ? 'w-full ':'w-[85%]'}}`}>
     <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/overview" element={<Dashboard />} />
         <Route path="/auth" element={<AuthPage/>} />
          <Route path="/customers" element={<UserTable/>} />
        </Routes>
      </main>
    </div>
  )
}
 
export default App