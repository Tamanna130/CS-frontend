import React, { useState } from "react";
import { Form, FormGroup, FormControl, Button, Alert } from "react-bootstrap";
import StudentImage from "../templates/Base/images/student.jpg";

const Signuppage = () => {
 const [username, setUsername] = useState("");
 const [password, setPassword] = useState("");
 const [confirmPassword, setConfirmPassword] = useState("");
 const [errorMessage, setErrorMessage] = useState("");

 const handleChangeUsername = (e) => {
    setUsername(e.target.value);
 };

 const handleChangePassword = (e) => {
    setPassword(e.target.value);
 };

 const handleChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
 };

 const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    // Implement your signup logic here
 };

 return (
    <div
      className="container"
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
          background: "linear-gradient(90deg, #5D54A4, #7C78B8)",
          boxShadow: "0px 0px 24px #5C5696",
          borderRadius: "16px",
          overflow: "hidden",
          height: "600px",
          width: "360px",
          display: "flex",
          flexDirection: "column",
          backgroundImage: "../templates/Base/images/Capture.PNG",
          // justifyContent: "center",
          alignItems: "center",
        }}
      >
      <h2 className="signup_title" style={{
        color: "#fff",
        marginTop: "30px",
        marginBottom: "50px"
      }}>Sign Up</h2>

      <Form onSubmit={handleSignup}>
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
              padding: "10px",
              marginBottom: "10px",
              width: "300px"
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
              padding: "10px",
              marginBottom: "10px"
            }}
          />
        </FormGroup>
        <FormGroup>
          <FormControl
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleChangeConfirmPassword}
            style={{
              borderColor: "#ddd",
              borderRadius: "4px",
              padding: "10px",
              marginBottom: "10px"
            }}
          />
        </FormGroup>
        <Button
          type="submit"
          variant="primary"
          style={{
            background: "#fff",
            fontSize: "14px",
            height: "40px",
            padding: "16px 20px",
            borderRadius: "4px",
            border: "1px solid #D4D3E8",
            textTransform: "uppercase",
            fontWeight: "700",
            display: "flex",
            alignItems: "center",
            width: "100px",
            color: "#4C489D",
            boxShadow: "0px 2px 2px #5C5696",
            cursor: "pointer",
          }}
        >
          Sign Up
        </Button>
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
    
 );
};

export default Signuppage;