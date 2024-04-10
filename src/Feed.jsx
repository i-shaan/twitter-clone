import React, { useState, useEffect } from "react";
import "./styles/Feed.css";
import TweetBox from "./TweetBox";
import Posts from "./Posts";
import { colRef } from "./Auth/config"; // Adjust the path to match your project structure
import { getDocs } from "firebase/firestore";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  // Define fetchData function
  const fetchData = async () => {
    try {
      const snapshot = await getDocs(colRef);
      const updatedPosts = snapshot.docs.map((doc) => doc.data());
      setPosts(updatedPosts);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    // Fetch data when component mounts
    fetchData();
  }, []);

  const handleTweetPosted = () => {
    // Call fetchData function to fetch updated posts after a tweet is posted
    fetchData();
  };

  return (
    <div className="xl:w-[38%] w-[100%] border-r border-gray-300 flex flex-col">
      <div className="w-full h-[7vh] justify-center gap-[50%] flex items-center cursor-pointer text-slate-600 border-b-2 top-0 sticky z-[0%]">
        <div>For You</div>
        <div>Following</div>
      </div>
      
      <div className="h-[90vh] z-[1] overflow-y-auto scrollbar-none">
        <TweetBox onTweetPosted={handleTweetPosted} />

        {posts.map((post, index) => (
          <Posts
            key={index} // Use a unique key for each post
            displayName={post.displayName}
            username={post.username}
            text={post.text}
            // Add other post properties as needed
          />
        ))}
      </div>
    </div>
  );
};

export default Feed;
