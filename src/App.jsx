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


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/about" element={<Mainpage />} />
        <Route path="/blog" element={<Blogpage />} />
        <Route path="/blog/1" element={<BlogPost1 />} />
        <Route path="/blog/2" element={<BlogPost2 />} />
        <Route path="/blog/3" element={<BlogPost3 />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/blog/write" element={<BlogWrite />} />
      </Routes>
    </Router>
  );
}

export default App;