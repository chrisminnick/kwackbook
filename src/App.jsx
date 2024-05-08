import { Logo, SubHead } from "./Logo.jsx";
import LoginForm from "./LoginForm.jsx";
import SearchBox from "./SearchBox.jsx";
import Feed from "./Feed.jsx";
import NewPostForm from "./NewPostForm.jsx";
import Footer from "./Footer.jsx";
import Post from "./Post.jsx";
import React from "react";
import LikeButton from "./LikeButton";
import "./App.css";
import DuckAd from "./DuckAd.jsx";

function App() {
  const posts = [
    { id: 1, content: "Why is my duck winning so much?", author: "Ben" },
    { id: 2, content: "Hooray! It's Maya day!", author: "Maya G" },
  ];
  return (
    <>
      <DuckAd />
      <div className="content-container">
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
                    <div>
                      <LikeButton />
                    </div>
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
      </div>
    </>
  );
}

export default App;
