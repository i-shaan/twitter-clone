import Sidebar from "./Sidebar"

import Feed from "./Feed"
import News from "./News"
import Posts from "./Posts"



function App() {


  return (
    <>
  <div className="flex">
    {/* Sidebar */}
  <Sidebar/>

  <Feed/>
  <News/>
  </div>
    
    
    </>
  )
}

export default App
