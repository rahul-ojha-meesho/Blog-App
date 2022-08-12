import React from "react";

const BlogThemeBase = (props) => {
  const blogThemeHandler = (event) => {
    // console.log(event.target.value);
    // console.log(props.blogTheme);
    for (let theme of props.blogTheme) {
      if (event.target.value === theme.theme) {
        if (event.target.checked === true) {
          theme.isSelected = true;
        } else {
          theme.isSelected = false;
        }
      }
    }

    props.onBlogThemeSelect(props.blogTheme);
  };

  return (
    <label htmlFor={props.blogThemeBase} className="blogTheme__theme">
      {props.blogThemeBase}
      <input
        className="blogTheme__checkbox"
        type="checkbox"
        onChange={blogThemeHandler}
        value={props.blogThemeBase}
      ></input>
    </label>
  );
};

export default BlogThemeBase;
