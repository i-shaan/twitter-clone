import React from 'react'
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';
import { deepOrange, deepPurple } from "@mui/material/colors";
const News = () => {
  return (
    <div className='w-[30%] hidden xl:block min-h-screen'>
      <div className='max-w-[80%] ml-[3rem]'>
       <div className=" p-4 h-[3rem] rounded-full mt-2 w-full flex items-center bg-gray-100">
        <SearchIcon className="text-gray-500" />
        <input
          className="w-full focus:outline-none ml-2 bg-gray-100"
          placeholder="Search Twitter"
          type="text"
        />
      </div>

      <div className="mt-4   bg-gray-100 rounded-xl">
        <h2 className="text-xl p-4 font-bold">What's happening</h2>
        <div className='flex flex-col gap-0.75 p-4 mt-2 hover:bg-gray-200'>
          <div className='font-extralight text-sm   '>
            <span>Sports</span><span> · </span><span>Trending</span>
          </div>
          <div className='font-bold'>
          Jay Shah
          </div>
          <div className='font-extralight text-sm'>
            1512 posts
          </div>
        </div>
        <div className='flex flex-col gap-0.75 p-4 mt-2 hover:bg-gray-200'>
          <div className='font-extralight text-sm   '>
            <span>Sports</span><span> · </span><span>Trending</span>
          </div>
          <div className='font-bold'>
          #MIvsRCB
          </div>
          <div className='font-extralight text-sm'>
            4086 posts
          </div>
        </div>        <div className='flex flex-col gap-0.75 p-4 mt-2 hover:bg-gray-200'>
          <div className='font-extralight text-sm   '>
            <span>Entertainment</span><span> · </span><span>Trending</span>
          </div>
          <div className='font-bold'>
          Shah Rukh Khan
          </div>
          <div className='font-extralight text-sm'>
            2712 posts
          </div>
        </div>       
       


      </div>
           <div className="mt-4   bg-gray-100 rounded-xl">
        <h2 className="text-xl px-4 pt-4 font-bold">Who to follow</h2>
        <div className='flex  gap-2 p-2 mt-2 hover:bg-gray-200'>
  <div className='flex items-center   '>
    <Avatar className="" sx={{ bgcolor: deepPurple[500] }}>
      A
    </Avatar>
  </div>
  <div className='flex flex-col'>
    <div>
      Akshat Jiwrajka
    </div>
    <div>
      @akj2306
    </div>
  </div>
  <div className='font-extralight text-sm ml-auto'>

  <button className="bg-black  text-white font-bold px-2 py-4 rounded-full w-[5rem] h-auto ">
      <div className='hidden xl:block'>Follow</div>
    </button>
   
  </div>
</div>
<div className='flex  gap-2 p-2 mt-2 hover:bg-gray-200'>
  <div className='flex items-center   '>
    <Avatar className="" sx={{ bgcolor: deepOrange[500] }}>
      R
    </Avatar>
  </div>
  <div className='flex flex-col'>
    <div>
     Rohit Kumar
    </div>
    <div>
      @rohit_k
    </div>
  </div>
  <div className='font-extralight text-sm ml-auto'>

  <button className="bg-black  text-white font-bold px-2 py-4 rounded-full w-[5rem] h-auto ">
      <div className='hidden xl:block'>Follow</div>
    </button>
   
  </div>
</div>



      </div>
      </div>
      </div>
  )
}

export default News