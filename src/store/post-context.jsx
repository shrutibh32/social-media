import { Children, createContext, useReducer } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const PostListReducer = (currentPostList, action) => {
  switch (action.type) {
    case "ADD_POST":
      return [action.payload, ...currentPostList];

    case "DELETE_POST":
      return currentPostList.filter(
        (post) => post.id !== action.payload.postid
      );
    default:
      return currentPostList;
  }
};
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    PostListReducer,
    DEFAULT_POSTLIST
  );

  const addPost = (userId, postTitle, postBody, reaction, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reaction,
        userId: userId,
        tags: tags,
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
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POSTLIST = [
  {
    id: "1",
    title: "Going to mumbai",
    body: "Hi friends",
    reactions: 2,
    userId: "user-9",
    tags: ["vaccation", "mumbai"],
  },
  {
    id: "2",
    title: "Going to bangalore",
    body: "Hi friends",
    reactions: 4,
    userId: "user-5",
    tags: ["vaccation", "bangalore"],
  },
];
export default PostListProvider;
