// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import { Container } from 'react-bootstrap';

// export default function AppHeader(){
//     return(
//         <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark"> 
//             <Container>
//                 <Navbar.Brand href="/">StudentRoom</Navbar.Brand>
//                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                 <Navbar.Collapse id="basic-navbar-nav">
//                 <Nav className="me-auto">
//                     <Nav.Link href="/">Home</Nav.Link>
//                 </Nav>
//                 <Nav>
//                     <Nav.Link href="#profile"><i>Profile</i></Nav.Link>
//                     <Nav.Link href="/login" className="justify-content-end">Log In</Nav.Link>

//                 </Nav>
//                 </Navbar.Collapse>
//             </Container>
//             </Navbar>
//     );
// }

// Import necessary modules
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Container } from 'react-bootstrap';
import Logout from '../../pages/Logout'; // Replace with the path to your Logout component

// authService.js
const isAuthenticated = () => {
  // Check if the user is authenticated (e.g., check if a JWT token exists)
  return !!localStorage.getItem('token');
};

// AppHeader component
export default function AppHeader() {
  const renderAuthComponent = () => {
    console.log(isAuthenticated())
    if (isAuthenticated()) {
      // User is authenticated, show LogoutComponent
      return <Logout />;
    } else {
      // User is not authenticated, show "Log In" link
      return <Nav.Link href="/login">Log In</Nav.Link>;
    }
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">StudentRoom</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
          <Nav>{renderAuthComponent()}</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
