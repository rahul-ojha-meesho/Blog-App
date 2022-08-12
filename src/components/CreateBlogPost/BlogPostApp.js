import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./BlogPostApp.css";
import PostAuthor from "./PostAuthor";
import PostTitle from "./PostTitle";
import BlogTheme from "./BlogTheme";
import BlogReaderGroup from "./BlogReaderGroup";
import BlogContent from "./BlogContent";
import BlogImage from "./BlogImage";

const BlogPostApp = (props) => {
  const blogThemesAvailable = [
    { theme: "Adventure", isSelected: false },
    { theme: "Comedy", isSelected: false },
    { theme: "Thriller", isSelected: false },
    { theme: "Science Fiction", isSelected: false },
    { theme: "Romantic", isSelected: false },
    { theme: "Miscellaneous", isSelected: false },
  ];

  const [postTitle, setPostTitle] = useState("");
  const [postAuthor, setPostAuthor] = useState("");
  const [blogTheme, setBlogTheme] = useState(blogThemesAvailable);
  const [blogReaderGroup, setBlogReaderGroup] = useState("");
  const [blogContent, setBlogContent] = useState("");
  const [blogImage, setBlogImage] = useState("");
  const [blogReactions, setBlogReactions] = useState([0, 0, 0, 0, 0]);
  const [newPost, setNewPost] = useState(false);

  const savePostTitleHandler = (title) => {
    setPostTitle(title);
  };

  const savePostAuthorHandler = (author) => {
    setPostAuthor(author);
  };

  const saveBlogThemeHandler = (theme) => {
    setBlogTheme(theme);
    console.log("theme final:", theme);
    // setBlogTheme((prevThemes) => {
    //   console.log(prevThemes);
    //   console.log(theme);
    // for (let currTheme of prevThemes) {
    //   if (currTheme === theme) {
    //     currTheme.isSelected = !currTheme.isSelected;
    //   }
    // }
    // });
    // setBlogTheme([0, 0, 0, 0, 0, 0]);
  };

  const saveBlogReaderGroupHandler = (readerGroup) => {
    setBlogReaderGroup(readerGroup);
  };

  const saveBlogContentHandler = (content) => {
    setBlogContent(content);
  };

  const saveBlogImageHandler = (image) => {
    setBlogImage(image);
  };

  const newPostHandler = () => {
    setNewPost(true);
    setBlogReactions([0, 0, 0, 0, 0]);
    setBlogTheme([blogThemesAvailable]);
  };

  const cancelPostHandler = () => {
    setNewPost(false);
  };

  const savePostHandler = (event) => {
    event.preventDefault();
    const blogDetails = {
      postTitle,
      postAuthor,
      blogTheme,
      blogReaderGroup,
      blogContent,
      blogImage,
      blogCreatedAt: new Date(),
      blogReactions,
    };

    // console.log(blogTheme);
    console.log("blogReactionsssss", blogTheme);

    if (
      postTitle.trim().length === 0 ||
      postAuthor.length === 0 ||
      blogContent.trim().length === 0 ||
      blogReaderGroup.length === 0
    ) {
      return;
    }

    console.log("blogDetails available here are: ", blogDetails);
    props.onCreateBlogPost(blogDetails);
    setNewPost(false);

    setPostTitle("");
    setPostAuthor("");
    setBlogTheme(blogThemesAvailable);
    setBlogReaderGroup("");
    setBlogContent("");
    setBlogImage("");
    setBlogReactions([0, 0, 0, 0, 0]);
  };

  return (
    <form onSubmit={savePostHandler}>
      <div className="blogPostAppContainer">
        <div className="blogPostAppHeader__container">
          <h1 className="blogPostAppHeader">My Blog App</h1>
          <div>
            <Link to="/all-posts">
              <button className="allPostsButton">All Posts</button>
            </Link>
          </div>
        </div>

        <div className="blogPostAppBody">
          {!newPost && (
            <button
              className="blogPostAppBody__newPostButton"
              onClick={newPostHandler}
            >
              Add a New Post
            </button>
          )}
          {newPost && (
            <div>
              <PostTitle onSavePostTitle={savePostTitleHandler} />

              <PostAuthor onSavePostAuthor={savePostAuthorHandler} />

              <BlogTheme
                onSaveBlogTheme={saveBlogThemeHandler}
                blogTheme={blogTheme}
              />

              <BlogReaderGroup
                onSaveBlogReaderGroup={saveBlogReaderGroupHandler}
              />

              <BlogContent onSaveBlogContent={saveBlogContentHandler} />

              <BlogImage onSaveBlogImage={saveBlogImageHandler} />

              <div className="blogPostApp__buttoncontainer">
                <button className="blogPostApp__saveButton">Save Post</button>
                <button
                  className="blogPostApp__saveButton"
                  onClick={cancelPostHandler}
                >
                  Cancel Post
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </form>
  );
};

export default BlogPostApp;
