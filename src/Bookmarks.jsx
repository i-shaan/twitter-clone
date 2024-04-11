import React from 'react'
import { getDocs } from 'firebase/firestore';
import { colRef } from './Auth/config';
import { useEffect } from 'react';
import { useState } from 'react';
import Posts from './Posts';
const Bookmarks = () => {
    const [bookmarkedPosts, setBookmarkedPosts] = useState([]);
    const fetchBookMarkedPosts = async () => {
    const snapshot = await getDocs(colRef);
    const updatedPosts = snapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };

    })
    const bookmarkedPosts = updatedPosts.filter((post) => post.bookmark === true);
    setBookmarkedPosts(bookmarkedPosts);
    console.log(bookmarkedPosts)
}
    useEffect(() => {
        fetchBookMarkedPosts();
      }, []);
 

  return (
    <div className="xl:w-[38%] w-[100%] border-r border-gray-300 flex flex-col">
    {bookmarkedPosts.map((post) => (

<Posts
key={post.id} 
id={post.id}
displayName={post.displayName}
username={post.username}
text={post.text}
// onBookmarkClick={handleBookmarkClick}

/>
        ))}
    </div>
  )
}

export default Bookmarks