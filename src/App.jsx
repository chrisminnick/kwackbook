import Logo from './Logo.jsx';
import LoginForm from './LoginForm.jsx';
import SearchBox from './SearchBox.jsx';
import Feed from './Feed.jsx';
import NewPostForm from './NewPostForm.jsx';
import Footer from './Footer.jsx';

import './App.css';

function App() {
  const posts = [
    { id: 1, content: 'Why is my duck not winning?', author: 'Ben' },
    { id: 2, content: "Hooray! It's Maya day!", author: 'Maya G' },
  ];
  return (
    <>
      <div className="container">
        <div className="row">
          <Logo />
          <LoginForm />
        </div>
        <div className="row">
          <div className="col-md-8">
            <SearchBox />
            <Feed posts={posts} layout="grid" />
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
