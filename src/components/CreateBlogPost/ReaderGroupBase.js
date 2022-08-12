import React from "react";

const ReaderGroupBase = (props) => {
  const blogReaderGroupHandler = (event) => {
    props.onReaderGroupBase(event.target.value);
  };
  return (
    <label className="blogReaderGroup__label">
      {props.readerGroup}
      <input
        type="radio"
        name="blogReaderGroup"
        className="blogReaderGroup__button"
        value={props.readerGroup}
        onChange={blogReaderGroupHandler}
      ></input>
    </label>
  );
};

export default ReaderGroupBase;
