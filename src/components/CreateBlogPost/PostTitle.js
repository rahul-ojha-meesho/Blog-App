import React, { useState } from "react";
import "./PostTitle.css";

const PostTitle = (props) => {
  const [postTitle, setPostTitle] = useState("");

  const postTitleHandler = (event) => {
    setPostTitle(event.target.value);
    props.onSavePostTitle(event.target.value);
  };

  return (
    <div className="postTitle__container">
      <div className="postTitle__title">
        <label>Post Title:</label>
      </div>
      <input
        type="text"
        placeholder="What's on your mind?"
        className="postTitle__text"
        onChange={postTitleHandler}
        value={postTitle}
        required={true}
        maxLength={30}
      />
    </div>
  );
};

export default PostTitle;
