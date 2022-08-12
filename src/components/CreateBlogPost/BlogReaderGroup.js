import React from "react";
import ReaderGroupBase from "./ReaderGroupBase";
import "./BlogReaderGroup.css";

const BlogReaderGroup = (props) => {
  const blogReaderGroupHandler = (event) => {
    props.onSaveBlogReaderGroup(event);
  };

  return (
    <div className="blogReaderGroup__container">
      <div className="blogReaderGroup__title">
        <label>Blog Reader Group:</label>
      </div>
      <ReaderGroupBase
        readerGroup="Beginner"
        onReaderGroupBase={blogReaderGroupHandler}
      />
      <ReaderGroupBase
        readerGroup="Intermediate"
        onReaderGroupBase={blogReaderGroupHandler}
      />
      <ReaderGroupBase
        readerGroup="Advanced"
        onReaderGroupBase={blogReaderGroupHandler}
      />
    </div>
  );
};

export default BlogReaderGroup;
