import { useState, useEffect } from 'react';
import { useLogin } from '../hooks/useLogin.jsx';

import { Logo, SubHead } from './Logo.jsx';
import LoginForm from './LoginForm.jsx';
import SearchBox from './SearchBox.jsx';
import Feed from './Feed.jsx';
import NewPostForm from './NewPostForm.jsx';
import Footer from './Footer.jsx';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const { loggedInStatus } = useLogin();

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch('http://localhost:3000/posts');
      const data = await response.json();
      setPosts(data);
    }
    fetchPosts();
  }, []);

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
            <p>
              <b>{posts.length} Kwacks have been posted so far!</b>
            </p>
            <Feed posts={posts} loggedInStatus={loggedInStatus} />
          </div>
          <div className="col-md-4">
            <NewPostForm loggedInStatus={loggedInStatus} />
          </div>
        </div>
        <Footer copyrightDate={new Date()} />
      </div>
    </>
  );
}

export default App;
