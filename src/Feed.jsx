import Post from './Post.jsx';

function Feed(props) {
  return (
    <div>
      {props.posts.map((post) => (
        <li key={post.id}>
          <Post content={post.content} author={post.author} />
        </li>
      ))}
    </div>
  );
}
export default Feed;
