import React from "react";
import Avatar from "@mui/material/Avatar";

import { deepPurple } from "@mui/material/colors";
const TweetBox = () => {
  return (
    <div className="h-auto   flex pt-[2%] border-b border-gray-300 ">
      <div className="w-[7vh] flex justify-center  ">
        <div className="h-[5vh]  flex items-center ">
          <Avatar className="" sx={{ bgcolor: deepPurple[500] }}>
            I
          </Avatar>
        </div>
      </div>
      <div className="w-full p-[2%]  px-2 flex flex-col ">
        <textarea
          className="block w-full h-[5vh] border-none focus:border-none active:border-none outline-none overflow-hidden overflow-y-auto resize-none "
          placeholder="What is happening?!"
        />
        <div className="my-1  flex justify-end ">
          <button className="bg-[#1DA1F2] hover:bg-[#1D9BF0] text-white font-bold px-4 py-2 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-600">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default TweetBox;
