import React from "react";
import { useContext, useState } from "react";
import { MdDelete } from "react-icons/md";
import { PostList as PostListContext } from "../store/post-context";
import { motion } from "framer-motion";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import ImageCarousel from "./ImageCarousel"; // Adjust path





export default function Post({ post }) {
  const [likes, setLikes] = useState(post.reactions?.likes || 0);
  const [dislikes, setDislikes] = useState(post.reactions?.dislikes || 0);
  const { deletePost, updateReactions } = useContext(PostListContext);

  const handleLike = () => {
    const newLikes = likes + 1;
    setLikes(newLikes);
    updateReactions(post.id, { likes: newLikes, dislikes });
  };

  const handleDislike = () => {
    const newDislikes = dislikes + 1;
    setDislikes(newDislikes);
    updateReactions(post.id, { likes, dislikes: newDislikes });
  };
  const getBadgeColor = (tag) => {
    const colors = [
      "primary",
      "success",
      "danger",
      "warning",
      "info",
      "secondary",
    ];
    return colors[tag.length % colors.length]; // Simple logic based on tag length
  };

  return (
    <motion.div
      className="card post-card mb-3"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="card post-card">
        <div className="card-body">
          <h5 className="card-title">
            {" "}
            {post.title}
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger deletebutton"
              onClick={() => deletePost(post.id)}
            >
              <MdDelete />
            </span>
          </h5>
          <p className="card-text">{post.body}</p>
          {(post.tags || []).map((tag) => (
            <span
              key={tag}
              className={`badge me-1 mb-1 bg-${getBadgeColor(
                tag
              )} text-capitalize`}
            >
              {tag}
            </span>
          ))}

                  {/* Show uploaded images if any */}
{post.images?.length > 0 && (
  <div className="mt-3">
    <ImageCarousel images={post.images} />
  </div>
)}

          <div className="mt-3 d-flex gap-3">
            <button className="btn btn-outline-success" onClick={handleLike}>
              <FaThumbsUp /> {likes}
            </button>
            <button className="btn btn-outline-danger" onClick={handleDislike}>
              <FaThumbsDown /> {dislikes}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
