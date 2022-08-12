import React, { useState } from "react";
import BlogPostApp from "../components/CreateBlogPost/BlogPostApp";
import BlogPostsList from "../components/BlogPosts/BlogPostsList";
import NoPosts from "./NoPosts";
import "../App.css";

const Home = (props) => {
  return (
    <div>
      <BlogPostApp onCreateBlogPost={props.blogSaveHandler} />
      {props.blogDetails.length === 0 ? (
        <NoPosts />
      ) : (
        // <h1>Sorry!!! No Posts Available At The Moment</h1>
        <BlogPostsList blogDetails={props.blogDetails} />
      )}
    </div>
  );
};

export default Home;
