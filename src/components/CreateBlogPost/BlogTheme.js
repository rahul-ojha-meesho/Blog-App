import React, { useState } from "react";
import BlogThemeBase from "./BlogThemeBase";
import "./BlogTheme.css";

const BlogTheme = (props) => {
  // const blogThemesAvailable = [
  //   { theme: "Adventure", isSelected: false },
  //   { theme: "Comedy", isSelected: false },
  //   { theme: "Thriller", isSelected: false },
  //   { theme: "Science Fiction", isSelected: false },
  //   { theme: "Romantic", isSelected: false },
  //   { theme: "Miscellaneous", isSelected: false },
  // ];
  // const [themes, setThemes] = useState(blogThemesAvailable);

  const blogThemeHandler = (blogThemes) => {
    props.onSaveBlogTheme(blogThemes);
    //   setThemes((prevThemes) => {
    //     console.log("from blog theme page: ", prevThemes);
    //     console.log("from blog theme page: ", blogThemes);
    //     // return [...prevThemes, blogThemes];
  };
  // console.log(props.blogTheme);
  // props.onSaveBlogTheme();
  // };

  return (
    <div className="blogTheme__container">
      <div className="blogTheme__title">
        <label>Blog Theme:</label>
      </div>
      <div className="blogTheme__themes">
        <BlogThemeBase
          blogThemeBase="Adventure"
          onBlogThemeSelect={blogThemeHandler}
          blogTheme={props.blogTheme}
        />
        <BlogThemeBase
          blogThemeBase="Comedy"
          onBlogThemeSelect={blogThemeHandler}
          blogTheme={props.blogTheme}
        />
        <BlogThemeBase
          blogThemeBase="Thriller"
          onBlogThemeSelect={blogThemeHandler}
          blogTheme={props.blogTheme}
        />
        <BlogThemeBase
          blogThemeBase="Science Fiction"
          onBlogThemeSelect={blogThemeHandler}
          blogTheme={props.blogTheme}
        />
        <BlogThemeBase
          blogThemeBase="Romance"
          onBlogThemeSelect={blogThemeHandler}
          blogTheme={props.blogTheme}
        />
        <BlogThemeBase
          blogThemeBase="Miscellaneous"
          onBlogThemeSelect={blogThemeHandler}
          blogTheme={props.blogTheme}
        />
      </div>
    </div>
  );
};

export default BlogTheme;
