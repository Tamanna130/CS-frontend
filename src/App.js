// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/homePage';
import DiscussionForum from './pages/forum';
import Loginpage from './pages/Loginpage'
import Signuppage from './pages/Signuppage';
import MockTestPage from './pages/mock_test/MockTestPage';
import Questions from './pages/mock_test/questions/Questions';
// import AddQuestions from './pages/mock_test/questions/AddQuestions'
import SelectExamUser from './pages/mock_test/SelectExamUser';
import Result from './pages/mock_test/Result';
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
          {/* <Route path='/studentroom/mocktest/add-questions/:id' element={<AddQuestions/>}/> */}
          <Route path='/studentroom/mocktest/select-exam' element={<SelectExamUser/>}/>
          <Route path='/studentroom/mocktest/exam/result' element={<Result/>}/>
        </Routes>
      
    </BrowserRouter>
  );
}

export default App;


// App.js

// App.js
// import React from 'react';
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import Home from './pages/homePage';
// import DiscussionForum from './pages/forum';
// import Loginpage from './pages/Loginpage';
// import Signuppage from './pages/Signuppage';
// import MockTestPage from './pages/mock_test/MockTestPage';
// import Questions from './pages/mock_test/questions/Questions';
// import SelectExamUser from './pages/mock_test/SelectExamUser';
// import Result from './pages/mock_test/Result';

// // Function to check if the user is authenticated
// const isAuthenticated = () => {
//   // Replace this with your actual authentication logic
//   // For example, check if a token exists in local storage
//   return !!localStorage.getItem('token');
// };

// const PrivateRoute = ({ path, element }) => {
//   // Redirect to login if not authenticated
//   if (!isAuthenticated()) {
//     return <Navigate to="/login" />;
//   }

//   return <Route path={path} element={element} />;
// };

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {!isAuthenticated() ? (
//         <>
//         <Route path="/login" element={<Loginpage />} />
//         <Route path="/" element={<Home />} />
//         <Route path="/signup" element={<Signuppage />} />
//         </>
//         ) : (
//           <>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Loginpage />} />
//           <Route path="/signup" element={<Signuppage />} />
//           <Route path="/studentroom/discussionforum" element={<DiscussionForum />} />
//           <Route path="/studentroom/mocktest" element={<MockTestPage />} />
//           <Route path="/studentroom/mocktest/questions" element={<Questions />} />
//           <Route path="/studentroom/mocktest/select-exam" element={<SelectExamUser />} />
//           <Route path="/studentroom/mocktest/exam/result" element={<Result />} />
//           </>
//         )
//         }
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// import './App.css'
// import React from 'react';
// import { BrowserRouter, Routes, Route, Navigate,Outlet } from 'react-router-dom';
// import Home from './pages/homePage';
// import DiscussionForum from './pages/forum';
// import Loginpage from './pages/Loginpage';
// import Signuppage from './pages/Signuppage';
// import MockTestPage from './pages/mock_test/MockTestPage';
// import Questions from './pages/mock_test/questions/Questions';
// import SelectExamUser from './pages/mock_test/SelectExamUser';
// import Result from './pages/mock_test/Result';

// // ... other imports

// // ... component definitions\
// const isAuthenticate = () => {
//     // Replace this with your actual authentication logic
//     // For example, check if a token exists in local storage
//     return !!localStorage.getItem('token');
//   };

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/signup" element={<Signuppage />} />
//         <Route path="/login" element={<Loginpage />} />

//         <Route element={<ProtectedRoute />} /> {/* Wrap protected routes with ProtectedRoute */}
//       </Routes>
//     </BrowserRouter>
//   );
// }

// function ProtectedRoute({ children }) {
//   const isAuthenticated = isAuthenticate()// Your authentication logic here

//   return (
//     <Route>
//       {isAuthenticated ? (
//         <Routes> {/* Nested routes go within a separate Routes */}
//           <Route index element={<Navigate to="/studentroom/discussionforum" replace />} />
//           <Route path="/studentroom/discussionforum" element={<DiscussionForum />} />
//           <Route path="/studentroom/mocktest" element={<MockTestPage />} />
//           <Route path="/studentroom/mocktest/questions" element={<Questions />} />
//           <Route path="/studentroom/mocktest/select-exam" element={<SelectExamUser />} />
//           <Route path="/studentroom/mocktest/exam/result" element={<Result />} />
//         </Routes>
//       ) : (
//         <Navigate to="/login" replace />
//       )}
//     </Route>
//   );
// }
