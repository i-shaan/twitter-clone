import React, { useState } from "react";
import { deepPurple } from "@mui/material/colors";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";
import Avatar from "@mui/material/Avatar";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import DeleteIcon from '@mui/icons-material/Delete';
import { getDocs } from "firebase/firestore";
import { colRef } from "./Auth/config";
import { getDoc } from "firebase/firestore";

const Post = ({
  id,
  displayName,
  username,
  verified,
  text,
  image,
  avatar,
  onBookmarkClick,
  isBookMark,
  onDeleteClick
}) => {
  const [bookmarked, setBookmarked] = useState(isBookMark);
 
  const handleBookmark = () => {
    onBookmarkClick(id);
    setBookmarked(!bookmarked); // Toggle bookmarked state
  };
  const handleDelete = () =>{
    onDeleteClick(id);
  }

  return (
    <div className="flex items-start border-b border-gray-300 pb-10">
      <div className="p-4">
        <Avatar src={avatar} />
      </div>
      <div className="flex-1 p-4">
        <div className="mb-10 ">
          <div className="flex justify-between ">
            <div>
            <h3 className="text-base font-medium">
              {displayName}
              <span className="font-semibold text-gray-500">
                {verified && <VerifiedUserIcon className="text-blue-500" />} @
                {username}
              </span>
            </h3>
            </div>
            <button className="" onClick={handleDelete}>
              <DeleteIcon/>
            </button>

          </div>
          <div className="text-sm">{text}</div>
        </div>
        <img
          className="h-[100%] w-[100%] rounded-lg"
          src="data:image/jpeg;base64,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"
          alt=""
        />
        <div className="flex justify-between mt-20">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <button onClick={handleBookmark}>
            {bookmarked ? (
              <BookmarkIcon fontSize="small" />
            ) : (
              <BookmarkBorderIcon fontSize="small" />
            )}
          </button>
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
};

export default Post;
