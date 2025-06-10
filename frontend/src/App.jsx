import { Dashboard } from "./components/dashboard"
import { LeftSideBar } from "./components/leftsidebar"

function App() {
  return (
    <div className="h-screen w-full flex">
      <div className="md:w-[20%] w-[15%]">
        <LeftSideBar/>

      </div>
      <main className="bg-dark-700 h-full w-[92%]  md:w-80% md:pr-5">
      <Dashboard />
      </main>
    </div>
  )
}
 
export default App