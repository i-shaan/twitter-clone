import React from "react";
import "./styles/Feed.css"
import TweetBox from "./TweetBox";
import Posts from "./Posts"
const Feed = () => {
  return (
    <div className="xl:w-[38%] w-[100%]   border-r border-gray-300 flex flex-col ">
      <div className="w-full h-[7vh] justify-center gap-[50%] flex items-center cursor-pointer text-slate-600 border-b-2 top-0 sticky z-[0%]">
        <div>For You</div>
        <div>Following</div>
      </div>
      
      <div className=" h-[90vh]  z-[1] overflow-y-auto scrollbar-none ">
        
      <TweetBox/>
      <Posts/>
      <Posts/>
      <Posts/>
     
      </div>
    </div>
  );
};

export default Feed;
