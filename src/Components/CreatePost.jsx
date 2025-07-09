import React, { useContext, useRef,useState } from "react";
import { PostList as PostListContext } from "../store/post-context";
import { Toast } from "bootstrap"; // 💡 this is required to trigger toast
import ImageUpload from "./ImageUpload"; // Adjust path if needed

export default function CreatePost() {
  const {addPost}=useContext(PostListContext);
const userIdElement=useRef();
const postTitleElement=useRef();
const postBodyElement=useRef();
// const reactionsElement=useRef();
const tagsElement=useRef();
const toastRef = useRef(); // Create toastRef to control the toast



  const [images, setImages] = useState([]);

  const handleImagesSelected = (urls) => {
    setImages(urls); //  These are cloud image URLs
  };






  let handlesubmit=(event)=>{
    event.preventDefault();
    const userId=userIdElement.current.value;
    const postTitle=postTitleElement.current.value;
    const postBody=postBodyElement.current.value;
    // const reaction=reactionsElement.current.value;
    const tags=tagsElement.current.value.split(" ");

       fetch('https://dummyjson.com/posts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: postTitle,
      body: postBody,
      userId: userId,
      tags: tags,
      reactions: 0
    })
  })
  .then((res)=>res.json())
  .then(data=>{
        console.log("Server Response:", data);
        console.log('calling addPost');
      addPost(userId, postTitle, postBody, { likes: 0, dislikes: 0 }, tags, images);
    console.log('called addPost');
    userIdElement.current.value="";
    postTitleElement.current.value="";
    postBodyElement.current.value="";
    // reactionsElement.current.value="";
    tagsElement.current.value="";
    setImages([]);
  })

 const toast = new Toast(toastRef.current);
        toast.show();
  
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
        {/* <div className="mb-3 ">
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
        </div> */}
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
        <ImageUpload onImagesSelected={handleImagesSelected} />

        <div className="col-12">
          <button className="btn btn-primary" type="submit" >
            Post
          </button>
        </div>
      </form>
      <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 11 }}>
  <div
    className="toast align-items-center text-white bg-success border-0"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
    ref={toastRef}
  >
    <div className="d-flex">
      <div className="toast-body">
        Post added successfully!
      </div>
      <button
        type="button"
        className="btn-close btn-close-white me-2 m-auto"
        data-bs-dismiss="toast"
        aria-label="Close"
      ></button>
    </div>
  </div>
</div>

    </>
  );
  
}
