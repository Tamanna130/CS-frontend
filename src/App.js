import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/homePage';
import DiscussionForum from './pages/forum';
import ForumComment from './pages/forumComment';


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/studentroom" element={<Home />}/>
          <Route path="/studentroom/discussionforum" element={<DiscussionForum />}/>
        </Routes>
      
    </BrowserRouter>
  );
}

export default App;
