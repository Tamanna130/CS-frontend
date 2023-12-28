import React, { useState } from "react";
import { Form, FormGroup, FormControl, Button, Alert } from "react-bootstrap";
import StudentImage from "../templates/Base/images/student.jpg";
import LoginImage from "../templates/Base/images/Capture.png";
import { useNavigate } from 'react-router-dom';
import { login } from "../stores/reducers/userInfo";
import { useDispatch } from "react-redux";
import {jwtDecode} from 'jwt-decode';
import { Link } from "react-router-dom";
const Loginpage = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://127.0.0.1:3000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
  
      const data = await response.json();
      console.log("Access Token:", data.access_token);
  
      if (data && data.access_token) {
        localStorage.setItem("token", data.access_token);
  
        try {
          const decodedToken = jwtDecode(data.access_token);
          if (decodedToken && decodedToken.username) {
            localStorage.setItem("username", decodedToken.username);
            navigate('/');
          } else {
            console.error("Invalid decoded token:", decodedToken);
            setErrorMessage("Invalid token received from the server.");
          }
        } catch (decodeError) {
          console.error("Error decoding token:", decodeError.message);
          setErrorMessage("Error decoding token received from the server.");
        }
      } else {
        setErrorMessage(data.message || "Invalid credentials");
        console.log("Error Message:", data.message);
      }
    } catch (error) {
      console.error("API Error:", error.message);
      setErrorMessage("Error communicating with the server.");
    }
  };
  

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
        // minWidth: "310vh",
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
          // background: "linear-gradient(90deg, #5D54A4, #7C78B8)",
          boxShadow: "0px 0px 24px #5C5696",
          borderRadius: "16px",
          overflow: "hidden",
          height: "600px",
          width: "360px",
          display: "flex",
          flexDirection: "column",
          backgroundImage: `url(${LoginImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          // backgroundPosition: "-5% -5%",
          justifyContent: "left",
          // alignItems: "center",
        }}
      >
        <h2 className="login_title" style={{
          color: "black",
          marginTop: "100px",
          marginBottom: "40px",
          marginLeft: "30px"
        }}>Login</h2>
        
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            // alignItems: "center",
            // justifyContent: "center"
          }}
        >
          
          <Form onSubmit={handleLogin}>
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
              Log In
            </Button>

            {/* create new account ? */}
            <div style={{
              marginLeft: "30px",
              marginTop: "10px",
            }}>
              <Link to="/signup">
              <p style={{ color: "black", fontSize: "14px" }}>
                Create an account
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

export default Loginpage;
