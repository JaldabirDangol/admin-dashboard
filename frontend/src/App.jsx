import AuthPage from "./components/authpage"
import { Dashboard } from "./components/dashboard"
import { LeftSideBar } from "./components/leftsidebar"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="h-full w-full flex">
      <div className="h-screen  w-[15%] ">
        <LeftSideBar/>
      </div>
      <main className="bg-dark-700 h-full w-[85%] md:pr-5 overflow-y-auto scrollbar-hide">
     <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/overview" element={<Dashboard />} />
         <Route path="/login" element={<AuthPage/>} />
        </Routes>
      </main>
    </div>
  )
}
 
export default App