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
    { id: 2, content: "Horray! It's Maya day!", author: 'Maya G' },
  ];
  return (
    <>
      <Logo />
      <LoginForm />
      <SearchBox />
      <Feed posts={posts} layout="grid" />
      <NewPostForm />
      <Footer />
    </>
  );
}

export default App;
