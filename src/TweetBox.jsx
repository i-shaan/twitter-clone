import React from "react";
import Avatar from "@mui/material/Avatar";
import { useState } from "react";
import { deepPurple } from "@mui/material/colors";
import { colRef } from "./Auth/config";
import Posts from "./Posts";
import { addDoc } from "firebase/firestore";
import { posts } from "./Auth/config";

const TweetBox = ({ onTweetPosted }) => {
  const name = localStorage.getItem("email");
  const displayName = name ? name.slice(0, 6) : "Anonymous";
  const username = name ? name.slice(0, name.indexOf("@")) : "anonymous";

  const [tweetMessage, setTweetMessage] = useState("");
  const [message, setmessage] = useState("");

  const sendTweet = async (e) => {
    e.preventDefault();
    console.log(name, name ? name.slice(0, name.indexOf("@")) : "Anonymous", tweetMessage);

    try {
      await addDoc(colRef, {
        displayName: displayName,
        username: username,
        text: tweetMessage,
      });

      // Reset tweet message input
      setTweetMessage("");

      // Invoke the callback function passed from the parent component
      onTweetPosted();
    } catch (error) {
      console.error("Error posting tweet:", error);
    }
  };

  return (
    <>
      <div className="h-auto flex pt-[2%] border-b border-gray-300">
        <div className="w-[7vh] flex justify-center">
          <div className="h-[5vh] flex items-center">
            <Avatar className="" sx={{ bgcolor: deepPurple[500] }}>
              I
            </Avatar>
          </div>
        </div>
        <div className="w-full p-[2%] px-2 flex flex-col">
          <textarea
            className="block w-full h-[5vh] border-none focus:border-none active:border-none outline-none overflow-hidden overflow-y-auto resize-none"
            placeholder="What is happening?!"
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
          />
          <div className="my-1 flex justify-end">
            <button
              className="bg-[#1DA1F2] hover:bg-[#1D9BF0] text-white font-bold px-4 py-2 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-600"
              type="submit"
              onClick={sendTweet}
              disabled={!name} // Disable the button if name is not defined
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TweetBox;
