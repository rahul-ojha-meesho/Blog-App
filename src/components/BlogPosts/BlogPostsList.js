import BlogPost from "./BlogPost";
import "./BlogPostsList.css";

// let allBlogPosts = [];
const BlogPostsList = (props) => {
  // console.log("from here", props.blogDetails);
  // allBlogPosts.push(props.blogDetails);
  // console.log("all blog posts", allBlogPosts);

  return (
    <div className="blogPostsList__mainContainer">
      <div className="blogPostsList__headingContainer">
        <h1 className="blogPostsList__heading">Posts</h1>
      </div>
      <ul className="blogPostsList__list">
        {props.blogDetails.map((blogDetail) => (
          <div className="blogPostsList__container" key={blogDetail.key}>
            <div className="blogPostsList__body" key={blogDetail.key}>
              <BlogPost postData={blogDetail} key={blogDetail.key} />
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default BlogPostsList;
