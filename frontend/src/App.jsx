import { Dashboard } from "./components/dashboard"
import { LeftSideBar } from "./components/leftsidebar"

function App() {
  return (
    <div className="h-screen w-full flex">
      <div className="w-[20%]">
        <LeftSideBar/>

      </div>
      <main className="bg-dark-700 h-screen w-[80%] pr-5">
      <Dashboard />
      </main>
    </div>
  )
}
 
export default App