import React from 'react'
import Nav from 'react-bootstrap/Nav';

export default function Logout() {
    const handleLogout = () => {
        // Clear user authentication state (e.g., remove token from local storage)
        localStorage.removeItem('token');
    
        // Redirect to the login page or perform any other necessary actions
        // (This assumes you are using React Router for navigation)
        // Replace '/login' with the actual path to your login page
        window.location.href = '/';
      };
    
      return (
        <Nav.Link onClick={handleLogout}>Log Out</Nav.Link>
      );
}
