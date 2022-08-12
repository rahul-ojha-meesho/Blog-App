import { useParams } from "react-router-dom";
import BlogPost from "../components/BlogPosts/BlogPost";

const Post = (props) => {
  const params = useParams();
  const blogIndex = props.blogDetails.length - params.id - 1;
  console.log(blogIndex);
  //   console.log("from postjs", props.blogDetails);
  //   console.log("on post");
  return (
    <div>
      {/* <p>Showing single post {params.id}</p> */}
      <BlogPost postData={props.blogDetails[blogIndex]} />
    </div>
  );
};

export default Post;
