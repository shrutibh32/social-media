import React, { useContext, useRef } from "react";
import { PostList as PostListContext } from "../store/post-context";

export default function CreatePost() {
  const {addPost}=useContext(PostListContext);
const userIdElement=useRef();
const postTitleElement=useRef();
const postBodyElement=useRef();
const reactionsElement=useRef();
const tagsElement=useRef();


  let handlesubmit=(event)=>{
    event.preventDefault();
    const userId=userIdElement.current.value;
    const postTitle=postTitleElement.current.value;
    const postBody=postBodyElement.current.value;
    const reaction=reactionsElement.current.value;
    const tags=tagsElement.current.value.split(" ");
    addPost(userId,postTitle,postBody,reaction,tags);
    userIdElement.current.value="";
    postTitleElement.current.value="";
    postBodyElement.current.value="";
    reactionsElement.current.value="";
    tagsElement.current.value="";
  }
  return (
    <>
      <form className="create-post" onSubmit={handlesubmit}>
        <div className="mb-3 ">
          <label htmlFor="userid" className="form-label">
            Enter your User id here
          </label>
          <input
            type="text"
            className="form-control"
            id="userid"
            placeholder="Your User id"
            ref={userIdElement}
          />
        </div>
        <div className="mb-3 ">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="How are you feeling today..."
            ref={postTitleElement}
          />
        </div>
        <div className="mb-3 ">
          <label htmlFor="body" className="form-label">
            Post Content
          </label>
          <textarea
            className="form-control"
            id="body"
            rows="3"
            placeholder="Tell us more about it"
            ref={postBodyElement}
          ></textarea>
        </div>
        <div className="mb-3 ">
          <label htmlFor="reactions" className="form-label">
            Number of reactions
          </label>
          <input
            type="text"
            className="form-control"
            id="reactions"
            placeholder="How many people reacted to this post"
            ref={reactionsElement}
          />
        </div>
        <div className="mb-3 ">
          <label htmlFor="hastags" className="form-label">
            Enter your hastags here
          </label>
          <input
            type="text"
            className="form-control"
            id="hastags"
            placeholder="Please enter tags using space"
            ref={tagsElement}
          />
        </div>
        <div className="col-12">
          <button className="btn btn-primary" type="submit" >
            Post
          </button>
        </div>
      </form>
    </>
  );
}
