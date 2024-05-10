import { useState, useEffect, useCallback, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation.jsx';
import { AuthContext } from '../context/AuthContext';

import Logo from './Logo.jsx';
import AboutUs from './AboutUs.jsx';
import LoginForm from './LoginForm.jsx';
import SearchBox from './SearchBox.jsx';
import Feed from './Feed.jsx';
import NewPostForm from './NewPostForm.jsx';
import Footer from './Footer.jsx';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const { authState } = useContext(AuthContext);

  const fetchPosts = useCallback(async function () {
    const response = await fetch('http://localhost:3000/posts');
    const data = await response.json();
    setPosts(data);
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <>
      <Router>
        <div className="container">
          <div className="row">
            <div className="col-md-10">
              <Logo />
            </div>
            <div className="col-md-2">
              <LoginForm />
            </div>
            <Navigation />
          </div>
          <div className="row">
            <div className="col-md-8">
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <SearchBox />
                      <p>
                        <b>{posts.length} Kwacks have been posted so far!</b>
                      </p>
                      <Feed posts={posts} loggedInStatus={authState} />
                    </>
                  }
                />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<h1>Contact Us</h1>} />
              </Routes>
            </div>
            <div className="col-md-4">
              <NewPostForm loggedInStatus={authState} />
            </div>
          </div>
          <Footer copyrightDate={new Date()} />
        </div>
      </Router>
    </>
  );
}

export default App;
