import React, { useState } from "react";
import "./BlogPost.css";
import CreationTime from "./CreationTime";
import BlogPostReactions from "./BlogPostReactions";
import { Link } from "react-router-dom";

const BlogPost = (props) => {
  // console.log("postData", props.postData);
  // console.log("blogsArray", props.blogArray);
  // console.log("blogReactions in post", props.postData.blogReactions);
  return (
    <div className="blogPost__container">
      <div className="blogPost__title">
        <p>{props.postData.postTitle}</p>
      </div>

      <div className="blogPost__author">
        by {props.postData.postAuthor}
        {/* {
          (setTimeout(function getCreationTime() {
            <CreationTime date={props.postData.blogCreatedAt.toString()} />;
          }),
          )
        } */}
        <CreationTime date={props.postData.blogCreatedAt.toString()} />
        &#160;for {props.postData.blogReaderGroup} reader group.
      </div>

      {/* <div className="blogPost__theme">
        Blog theme:
        {props.postData.blogTheme.map((theme) => (
          <p>{theme}</p>
        ))}
      </div> */}

      <div className="blogPost__content">
        <p>{props.postData.blogContent}</p>
      </div>

      <BlogPostReactions blogReactions={props.postData.blogReactions} />

      <div>
        <Link to={`blog/${props.postData.key}`}>
          <button className="blogPost__viewPostButton">View Post</button>
        </Link>
      </div>
    </div>
  );
};

export default BlogPost;
