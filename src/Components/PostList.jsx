import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListContext } from "../store/post-context";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

export default function PostList() {

 const { postList,addInitialPosts } = useContext(PostListContext);
const [fetching,setFetching]=useState(false);
useEffect(() => {
  if (postList.length === 0) {
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;

    fetch('https://dummyjson.com/posts', { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      })
      .catch((err) => {
        if (err.name !== 'AbortError') {
          console.error("Fetch error:", err);
        }
      });

    return () => {
      controller.abort();
    };
  }
}, []);




 
  return (
    <>
    {fetching && <LoadingSpinner/>}
      {!fetching && postList.length === 0 ? (
       <WelcomeMessage/>
      ) : (
       !fetching && postList.map((post) => (
          <Post key={post.id} post={post} />
        ))
      )}
    </>
  );
}
