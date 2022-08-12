import React, { useState } from "react";

const BlogPostReactions = (props) => {
  console.log(props.blogReactions);
  const [countLikes, setCountLikes] = useState(props.blogReactions[0]);
  const [countCelebrates, setCountCelebrates] = useState(
    props.blogReactions[1]
  );
  const [countLoves, setCountLoves] = useState(props.blogReactions[2]);
  const [countRockets, setCountRockets] = useState(props.blogReactions[3]);
  const [countEyes, setCountEyes] = useState(props.blogReactions[4]);

  const updateCountLikes = () => {
    setCountLikes((prevCountLikes) => {
      return prevCountLikes + 1;
    });
    props.blogReactions[0] += 1;
  };

  const updateCountCelebrates = () => {
    setCountCelebrates((prevCountCelebrates) => {
      return prevCountCelebrates + 1;
    });
    props.blogReactions[1] += 1;
  };

  const updateCountLoves = () => {
    setCountLoves((prevCountLoves) => {
      return prevCountLoves + 1;
    });
    props.blogReactions[2] += 1;
  };

  const updateCountRockets = () => {
    setCountRockets((prevCountRockets) => {
      return prevCountRockets + 1;
    });
    props.blogReactions[3] += 1;
  };

  const updateCountEyes = () => {
    setCountEyes((prevCountEyes) => {
      return prevCountEyes + 1;
    });
    props.blogReactions[4] += 1;
  };

  return (
    <div className="blogPost__engageButtons">
      <button className="blogPost__button" onClick={updateCountLikes}>
        👍{countLikes}
      </button>

      <button className="blogPost__button" onClick={updateCountCelebrates}>
        🎉{countCelebrates}
      </button>

      <button className="blogPost__button" onClick={updateCountLoves}>
        ❤️{countLoves}
      </button>

      <button className="blogPost__button" onClick={updateCountRockets}>
        🚀{countRockets}
      </button>

      <button className="blogPost__button" onClick={updateCountEyes}>
        👀{countEyes}
      </button>
    </div>
  );
};

export default BlogPostReactions;
