import Sidebar from "./Sidebar"

import Feed from "./Feed"
import News from "./News"



function App() {


  return (
    <>
  <div className="flex">
    {/* Sidebar */}
  <Sidebar/>
  {/* FEED */}
  <Feed/>
  <News/>
  </div>
    
    
    </>
  )
}

export default App
