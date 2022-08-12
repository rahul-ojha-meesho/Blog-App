import React from "react";
import BlogPostsList from "../components/BlogPosts/BlogPostsList";
import NoPosts from "./NoPosts";
import "../App.css";

const AllPosts = (props) => {
  // console.log("in all posts");
  return (
    <div>
      {props.blogDetails.length === 0 ? (
        <NoPosts />
      ) : (
        // <h1>Sorry!!! No Posts Available At The Moment</h1>
        <BlogPostsList blogDetails={props.blogDetails} />
      )}
    </div>
  );
};

export default AllPosts;
