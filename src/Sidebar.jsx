import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import XIcon from '@mui/icons-material/X';
import Options from './Options';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
const Sidebar = () => {
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
        </div>

        {/* <Options text="Home"/> */}
    </div>
    
    </div>
    
    </>
  )
}

export default Sidebar