import React, { useEffect, useState } from 'react';
import { getDocs, updateDoc, doc ,deleteDoc} from 'firebase/firestore';
import { colRef } from './Auth/config';
import Posts from './Posts';

const Bookmarks = () => {
    const [bookmarkedPosts, setBookmarkedPosts] = useState([]);
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

    const fetchBookMarkedPosts = async () => {
        const snapshot = await getDocs(colRef);
        const updatedPosts = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        const bookmarkedPosts = updatedPosts.filter(post => post.bookmark === true);
        setBookmarkedPosts(bookmarkedPosts);
    };
    const handleDeleteClick = async (postId) => {
        try {
    
          await deleteDoc(doc(colRef, postId));
      
         
          setPosts(posts.filter(post => post.id !== postId));
          setBookmarkedPosts(bookmarkedPosts.filter(post => post.id !== postId));
          console.log("Posts",posts)
        } catch (error) {
          console.error("Error deleting post:", error);
        }
      };

    const handleBookmarkClick = async postId => {
        console.log("Bookmark clicked for post ID:", postId);
        const bookmarkedPostIndex = bookmarkedPosts.findIndex(post => post.id === postId);
        if (bookmarkedPostIndex !== -1) {
            const updatedBookmarkedPosts = [...bookmarkedPosts];
            const bookmarkedPost = updatedBookmarkedPosts[bookmarkedPostIndex];
            bookmarkedPost.bookmark = !bookmarkedPost.bookmark;
            await updateDoc(doc(colRef, postId), { bookmark: bookmarkedPost.bookmark });
            if (!bookmarkedPost.bookmark) {
                updatedBookmarkedPosts.splice(bookmarkedPostIndex, 1);
            }
            setBookmarkedPosts(updatedBookmarkedPosts);
            console.log(bookmarkedPost);
        }
    };
    
    useEffect(() => {
        fetchBookMarkedPosts();
        fetchData();
    }, []);


    const name = localStorage.getItem("email");

    return (
        <>
            {name && name.length > 0 ? (
                <div className="xl:w-[38%] w-[100%] border-r border-gray-300 flex flex-col">
                    <div className='flex flex-col gap-0.25 p-2 hover:cursor-pointer'>
                        <div className='font-bold text-2xl'>
                            Bookmarks
                        </div>
                        <div className='font-light text-sm'>
                            @{name.slice(0,6)}
                        </div>
                    </div>
                    {bookmarkedPosts.length > 0 ? (
                        bookmarkedPosts.map(post => (
                            <Posts
                                key={post.id}
                                id={post.id}
                                displayName={post.displayName}
                                username={post.username}
                                text={post.text}
                                isBookMark={post.bookmark}
                                onBookmarkClick={handleBookmarkClick}
                                onDeleteClick={handleDeleteClick}
                            />
                        ))
                    ) : (
                        <div className='flex flex-col gap-1 justify-center text-center mt-5'>
                            <div className='font-bold text-4xl'>
                                Save posts for later
                            </div>
                            <div className='font-light text-sm'>
                                Bookmark posts to easily find them again in the future.
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <>
                <div className="xl:w-[38%] w-[100%] border-r border-gray-300 flex flex-col   items-center">
                    <div className='p-2 font-bold text-2xl  '>
                        Please Login to see bookmarks
                    </div>
                </div>
                </>
            )}
        </>
    );
};

export default Bookmarks;
