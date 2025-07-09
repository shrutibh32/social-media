import { Children, createContext, useEffect, useReducer } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const PostList = createContext({
  postList: [],
  addPost: () => {},
  addInitialPosts:()=>{},
  deletePost: () => {},
});

const PostListReducer = (currentPostList, action) => {
  switch (action.type) {
    case "ADD_POST":
      return [action.payload, ...currentPostList];
    case "ADD_INITIAL_POSTS":
      return action.payload.posts;
    case "DELETE_POST":
      return currentPostList.filter(
        (post) => post.id !== action.payload.postid
      );
      case "UPDATE_REACTIONS":
  return currentPostList.map((post) => {
    if (post.id === action.payload.id) {
      return {
        ...post,
        reactions: action.payload.reactions,
      };
    }
    return post;
  });

    default:
      return currentPostList;
  }
};
const getInitialPosts = () => {
  const storedPosts = localStorage.getItem("posts");
  return storedPosts ? JSON.parse(storedPosts) : [];
};
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    PostListReducer,[],
   getInitialPosts

    
  );

//save data to localstorage

useEffect(()=>{
  localStorage.setItem("posts",JSON.stringify(postList));

},[postList]);
const updateReactions = (id, newReactions) => {
  dispatchPostList({
    type: "UPDATE_REACTIONS",
    payload: {
      id,
      reactions: newReactions,
    },
  });
};

  const addPost = (userId, postTitle, postBody, reaction, tags,images) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reaction,
        userId: userId,
        tags: tags,
        images: images, 
      },
    });
  };
    const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };
  const deletePost = (postid) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postid,
      },
    });
  };
  return (
    <PostList.Provider
      value={{
        postList,
         updateReactions,
        addPost,
        addInitialPosts,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};


export default PostListProvider;
