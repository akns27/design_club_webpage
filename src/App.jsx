import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './font.css';
import Mainpage from './pages/Mainpage';
import Blogpage from './pages/Blogpage';
import BlogPost1 from './pages/blogposts/BlogPost1';
import BlogPost2 from './pages/blogposts/BlogPost2';
import BlogPost3 from './pages/blogposts/BlogPost3';
import Profile from './pages/profile/Profile';
import BlogWrite from './pages/blog/BlogWrite';
import BlogPost from './pages/blogposts/BlogPost';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/about" element={<Mainpage />} />
        <Route path="/blog" element={<Blogpage />} />
        <Route path="/blog/:uerid/:blogid" element={<BlogPost />} />
        <Route path="/profile/:userid" element={<Profile />} />
        <Route path="/blog/write" element={<BlogWrite />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;