import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import XIcon from '@mui/icons-material/X';
import LogoutIcon from '@mui/icons-material/Logout';
import Options from './Options';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import {auth,provider} from "./Auth/config.js"
import {signInWithPopup} from "firebase/auth";
import { useState } from 'react';
import { useEffect } from 'react';


const Sidebar = () => {
  const [value,setValue] = useState('')
  var name;
  const handleClick =()=>{
      signInWithPopup(auth,provider).then((data)=>{
          setValue(data.user.email)
          localStorage.setItem("email",data.user.email)
          name=data.user.email
          console.log(name);
      })

  }
  const logout =()=>{
    localStorage.clear()
    window.location.reload()
}

  useEffect(()=>{
      setValue(localStorage.getItem('email'))
  })
  return (
<>
    <div className='xl:w-[27%] w-[10vw] min-h-screen border-r border-gray-300 '>
  
  <div className='xl:p-2 xl:ml-[15%] m-0'>
        <Options Icon={XIcon} text=""/>
        <Options Icon={HomeIcon} text="Home"/>
        <Options Icon={SearchIcon} text="Explore"/>
        <Options Icon={NotificationsNoneIcon} text="Notifications"/>
        <Options Icon={MailOutlineIcon} text="Messages"/>
        <Options Icon={BookmarkBorderOutlinedIcon} text="Bookmarks"/>
        <Options Icon={PermIdentityOutlinedIcon} text="Profile"/>
        <Options Icon={MoreHorizOutlinedIcon} text="More"/>
        <div className=' p-[12px]'>
        <button className="bg-[#1DA1F2] hover:bg-[#1D9BF0] text-white font-bold px-2 py-4 rounded-full w-full ">
      <div className='hidden xl:block'>Tweet</div>
    </button>
    <div className='mt-5'>
        {value?<button className='text-black hover:bg-slate-300 font-bold px-2 py-4 rounded-full w-full hover:cursor-pointer flex items-center justify-between' onClick={logout}>
  <div className='text-center mx-auto'>@{value.slice(0, 6)}</div> {/* Username in the middle */}
  <div className='flex items-center'> {/* "Logout" text */}
 
    <LogoutIcon onClick={logout}/>
  </div>
</button>

:
        <button className='text-black hover:bg-slate-300  font-bold px-2 py-4 rounded-full w-full hover:cursor-pointer' onClick={handleClick}><div>Signin With Google</div></button>
        }
    </div>
        </div>

        {/* <Options text="Home"/> */}
    </div>
    
    </div>
    
    </>
  )
}

export default Sidebar