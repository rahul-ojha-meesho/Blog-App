import React, { useState } from "react";
import "./BlogContent.css";

const BlogContent = (props) => {
  const [blogContent, setBlogContent] = useState("");

  const blogContentHandler = (event) => {
    setBlogContent(event.target.value);
    props.onSaveBlogContent(event.target.value);
  };

  return (
    <div className="blogContent__container">
      <div className="blogContent__title">
        <label>Blog Content:</label>
      </div>
      <textarea
        className="blogContent__textarea"
        onChange={blogContentHandler}
        value={blogContent}
        required={true}
      ></textarea>
    </div>
  );
};

export default BlogContent;
