import React, { useState } from "react";
import "./BlogImage.css";

const BlogImage = (props) => {
  const [blogImage, setBlogImage] = useState("");

  const blogImageHandler = (event) => {
    setBlogImage(event.target.value);
    props.onSaveBlogImage(event.target.value);
  };

  return (
    <div className="blogImage__container">
      <label className="blogImage__title">Blog Image:</label>
      <input type="file" onChange={blogImageHandler} value={blogImage}></input>
    </div>
  );
};

export default BlogImage;
