import Sidebar from "./Sidebar"

import Feed from "./Feed"
import News from "./News"
import Posts from "./Posts"
import Bookmarks from "./Bookmarks"
import { useState } from "react"

function App() {
  const [showFeed, setShowFeed] = useState(true);

  const handleBookmarkClick = () => {
    setShowFeed(false);
  };
  const handleFeedClick = () => {
    setShowFeed(true);
  };

  return (
    <>
  <div className="flex">
    {/* Sidebar */}
  <Sidebar onBookmarkClick={handleBookmarkClick} onHomeClick={handleFeedClick}/>

  {showFeed ? <Feed /> : <Bookmarks />}
  <News/>
  </div>
    
    
    </>
  )
}

export default App
