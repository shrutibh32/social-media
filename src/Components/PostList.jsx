import React, { useContext } from "react";
import Post from "./Post";
import { PostList as PostListContext } from "../store/post-context";
export default function PostList() {
  const { postList } = useContext(PostListContext);
  return (
    <>
      {postList.map((post) => (
        <Post key={post.id} post={post}/>
      ))}
    </>
  );
}
