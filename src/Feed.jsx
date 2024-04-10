import React, { useState } from "react";
import "./styles/Feed.css"
import TweetBox from "./TweetBox";
import Posts from "./Posts"
// import { db } from "./Auth/config"; // Adjust the path to match your project structure

import { useEffect } from "react";
const Feed = () => {
  const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   db.collection("posts").onSnapshot((snapshot) =>
  //     setPosts(snapshot.docs.map((doc) => doc.data()))
  //   );
  // }, []);

  return (
    <div className="xl:w-[38%] w-[100%]   border-r border-gray-300 flex flex-col ">
      <div className="w-full h-[7vh] justify-center gap-[50%] flex items-center cursor-pointer text-slate-600 border-b-2 top-0 sticky z-[0%]">
        <div>For You</div>
        <div>Following</div>
      </div>
      
      <div className=" h-[90vh]  z-[1] overflow-y-auto scrollbar-none ">
        
      <TweetBox/>
      <div>
      {posts.map((post) => (
          <Posts
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </div>
      <Posts/>
      <Posts/>
      <Posts/>
     
      </div>
    </div>
  );
};

export default Feed;
