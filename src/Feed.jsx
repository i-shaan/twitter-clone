import React, { useState, useEffect } from "react";
import "./styles/Feed.css";
import TweetBox from "./TweetBox";
import Posts from "./Posts";
import { colRef } from "./Auth/config"; 
import { getDocs } from "firebase/firestore";
import { doc,updateDoc,deleteDoc } from "firebase/firestore";

const Feed = () => {
  const [posts, setPosts] = useState([]);


  const fetchData = async () => {
    try {
      const snapshot = await getDocs(colRef);
      const updatedPosts = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() }; 
      });
      setPosts(updatedPosts);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };
  const handleBookmarkClick = async (postId) => {
    console.log("Bookmark clicked for post ID:", postId);
    const snapshot = await getDocs(colRef);
    const updatedPosts = snapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    })
    const bookmarkedPost = updatedPosts.find((post) => post.id === postId);
    console.log(bookmarkedPost)
    bookmarkedPost.bookmark=!bookmarkedPost.bookmark;

    await updateDoc(doc(colRef, postId), {
      bookmark: bookmarkedPost.bookmark
    });
    console.log(bookmarkedPost)

    

  };
  const handleDeleteClick = async (postId) => {
    try {

      await deleteDoc(doc(colRef, postId));
  
     
      setPosts(posts.filter(post => post.id !== postId));
      console.log("Posts",posts)
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };
  useEffect(() => {

    fetchData();
  }, []);

  const handleTweetPosted = () => {

    fetchData();
  };

  return (
    <div className="xl:w-[38%] w-[100%] border-r border-gray-300 flex flex-col">
      <div className="w-full h-[7vh] justify-center gap-[50%] flex items-center cursor-pointer text-slate-600 border-b-2 top-0 sticky z-[0%]">
        <div className="hover:text-black hover:font-semibold ">For You</div>
        <div className="hover:text-black hover:font-semibold ">Following</div>
      </div>
      
      <div className="h-[90vh] z-[1] overflow-y-auto scrollbar-none">
        <TweetBox onTweetPosted={handleTweetPosted} />

        {posts.map((post, index) => (
          <Posts
            key={index} // Use a unique key for each post
            id={post.id}
            displayName={post.displayName}
            username={post.username}
            text={post.text}
            onBookmarkClick={handleBookmarkClick}
            isBookMark={post.bookmark}
            onDeleteClick={handleDeleteClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Feed;
