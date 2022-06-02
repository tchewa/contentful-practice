import contentfulPosts from "./contentfulPosts";

function Post({ date, title, coverImage, excerpt, postContent}) {
  return (
    <div className="post">
      <img alt="test image" src={`https:${coverImage.fields.url}`} />
      <div className="text">
        <h2>{title}</h2>
        <h3>{date.substring(0, 10)}</h3>
        <p>{excerpt}</p>
        <p>{postContent}</p>
      </div>
    </div>
  )
}

export default Post
