import React, { useState } from "react";
import { Form, FormGroup, FormControl, Button, Alert } from "react-bootstrap";
import StudentImage from "../templates/Base/images/student.jpg";
import SignupImage from "../templates/Base/images/Capture.png"

import { login } from "../stores/reducers/userInfo";
import { useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [usertype, setUsertype] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const handleSignup = async (e) => {
    e.preventDefault();
  
    try {
      // Simulated API call to register user
      const response = await fetch("http://103.87.215.12:3000/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userType:usertype, username, password }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // Successful registration
        navigate('/login');
        console.log("User registered successfully");
        // Optionally, redirect to the login page or perform other actions
      } else {
        // Check if the user already exists
        setErrorMessage("User already exists. Please choose a different username.");

      }
    } catch (error) {
      console.error(error.message);
      setErrorMessage("An error occurred. Please try again later.");
    }
  };
  

  const handleChangeUsertype = (e) => setUsertype(e.target.value);
  const handleChangeUsername = (e) => setUsername(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

  return (
    <div
      className="base"
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background: "linear-gradient(90deg, #C7C5F4, #776BCC)",
        overflow: "hidden",
      }}
    >
      <div
        className="left"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={StudentImage}
          alt="student"
          width="500px"
          height="600px"
          style={{
            background: "linear-gradient(90deg, #5D54A4, #7C78B8)",
            boxShadow: "0px 0px 24px #5C5696",
            borderRadius: "16px",
            overflow: "hidden",
            marginRight: "100px",
          }}
        />
      </div>

      <div
        className="mid"
        style={{
          height: "700px",
          width: "6px",
          background: "linear-gradient(130deg, #5D54A4, #7C78B8)",
          border: "none",
          borderRadius: "50px",
          position: "relative",
          marginRight: "100px",
        }}
      ></div>

      <div
        className="right"
        style={{
          boxShadow: "0px 0px 24px #5C5696",
          borderRadius: "16px",
          overflow: "hidden",
          height: "600px",
          width: "360px",
          display: "flex",
          flexDirection: "column",
          backgroundImage: `url(${SignupImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          justifyContent: "left",
        }}
      >
        <h2 className="signup_title" style={{
          color: "black",
          marginTop: "100px",
          marginBottom: "40px",
          marginLeft: "30px"
        }}>Signup</h2>
        
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Form onSubmit={handleSignup}>
            <label htmlFor='userType'
              style={{
              borderColor: "#ddd",
              borderRadius: "4px",
              padding: "5px",
              marginLeft: "30px",
              width: "250px"
            }}>User Type:</label><br />
            <select id='userType' name='userType' 
              onChange={handleChangeUsertype}
              style={{
              borderColor: "#ddd",
              borderRadius: "4px",
              padding: "5px",
              marginBottom: "20px",
              marginLeft: "30px",
              width: "250px"
            }}>
              <option value='student'>Student</option>
              <option value='admin'>Admin</option>
            </select>

            <FormGroup>
              <FormControl
                type="text"
                id="username"
                placeholder="Username"
                value={username}
                onChange={handleChangeUsername}
                style={{
                  borderColor: "#ddd",
                  borderRadius: "4px",
                  padding: "5px",
                  marginBottom: "10px",
                  marginLeft: "30px",
                  width: "250px"
                }}
              />
            </FormGroup>
            <FormGroup>
              <FormControl
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={handleChangePassword}
                style={{
                  borderColor: "#ddd",
                  borderRadius: "4px",
                  padding: "5px",
                  marginBottom: "20px",
                  marginLeft: "30px",
                  width: "250px"
                }}
              />
            </FormGroup>
            <Button
              type="submit"
              variant="primary"
              style={{
                background: "#fff",
                fontSize: "14px",
                height: "30px",
                padding: "16px 20px",
                borderRadius: "4px",
                border: "1px solid #D4D3E8",
                textTransform: "uppercase",
                fontWeight: "700",
                display: "flex",
                alignItems: "center",
                width: "30%",
                color: "#4C489D",
                boxShadow: "0px 2px 2px #5C5696",
                cursor: "pointer",
                marginLeft: "30px"
              }}
            >
              Signup
            </Button>

            {/* Already have an account? */}
            <div style={{
              marginLeft: "30px",
              marginTop: "10px",
            }}>
              <Link to="/login">
                <p style={{ color: "black", fontSize: "14px" }}>
                  Already have an account? Login
                </p>
              </Link>
            </div>
          </Form>
          {errorMessage && (
            <Alert
              variant="danger"
              className="mt-3"
              style={{
                backgroundColor: "#dc3545",
                color: "#fff",
                padding: "10px",
                borderRadius: "4px",
              }}
            >
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
