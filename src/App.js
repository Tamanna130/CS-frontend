import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/homePage';
import DiscussionForum from './pages/forum';
import ForumComment from './pages/forumComment';
import Loginpage from './pages/Loginpage'
import Signuppage from './pages/Signuppage';
import MockTestPage from './pages/mock_test/MockTestPage';
import Questions from './pages/mock_test/Questions';
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/login" element={<Loginpage/>}/>
          <Route path="/signup" element={<Signuppage/>}/>
          <Route path="/" element={<Home />}/>
          <Route path="/studentroom/discussionforum" element={<DiscussionForum />}/>
          <Route path='/studentroom/mocktest' element={<MockTestPage/>}/>
          <Route path='/studentroom/mocktest/questions' element={<Questions/>}/>
        </Routes>
      
    </BrowserRouter>
  );
}

export default App;
