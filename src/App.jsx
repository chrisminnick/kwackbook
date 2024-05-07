import { Logo, SubHead } from './Logo.jsx';
import LoginForm from './LoginForm.jsx';
import SearchBox from './SearchBox.jsx';
import Feed from './Feed.jsx';
import NewPostForm from './NewPostForm.jsx';
import Footer from './Footer.jsx';
import Post from './Post.jsx';

import './App.css';

function App() {
  const posts = [
    { id: 1, content: 'Why is my duck winning so much?', author: 'Ben' },
    { id: 2, content: "Hooray! It's Maya day!", author: 'Maya G' },
  ];
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-10">
            <Logo />
            <SubHead />
          </div>
          <div className="col-md-2">
            <LoginForm />
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <SearchBox />
            <Feed>
              {posts.map((post) => (
                <li key={post.id}>
                  <Post content={post.content} author={post.author} />
                </li>
              ))}
            </Feed>
          </div>
          <div className="col-md-4">
            <NewPostForm />
          </div>
        </div>
        <Footer copyrightDate={new Date()} />
      </div>
    </>
  );
}

export default App;
