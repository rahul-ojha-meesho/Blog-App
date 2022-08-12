import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import AllPosts from "./pages/AllPosts";
import Home from "./pages/Home";
import Post from "./pages/Post";

const App = () => {
  const [blogDetails, setBlogDetails] = useState([]);
  const createBlogHandler = (blogData) => {
    blogData.key = blogDetails.length;
    setBlogDetails((prevBlogData) => {
      return [blogData, ...prevBlogData];
    });
  };
  console.log("details", blogDetails);
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Home blogDetails={blogDetails} blogSaveHandler={createBlogHandler} />
        </Route>
        <Route path="/blog/:id" exact>
          <Post blogDetails={blogDetails} />
        </Route>
        <Route path="/all-posts" exact>
          <AllPosts blogDetails={blogDetails} />
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
