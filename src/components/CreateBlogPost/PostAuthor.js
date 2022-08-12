import React, { useState } from "react";
import "./PostAuthor.css";

const PostAuthor = (props) => {
  const [postAuthor, setPostAuthor] = useState("");

  const postAuthorHandler = (event) => {
    // console.log(event.target.value);
    setPostAuthor(event.target.value);
    props.onSavePostAuthor(event.target.value);
  };

  return (
    <div className="postAuthor__container">
      <div className="postAuthor__title">
        <label>Author:</label>
      </div>
      <select
        className="postAuthor__authors"
        onChange={postAuthorHandler}
        value={postAuthor}
        required={true}
      >
        <option></option>
        <option>Ewell Kunde</option>
        <option>Reese Rippin</option>
        <option>Aliyah Klein</option>
      </select>
    </div>
  );
};

export default PostAuthor;
