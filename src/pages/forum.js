import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import AppHeader from "../templates/Base/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ForumAccordion from "../templates/Base/Accordion";
import SinglePost from "./singlePost";
import { fetchWithAuth } from "../hooks/fetchHook";

const primaryColor = "#007bff"; // Teal (primary accent)
const secondaryColor = "#e0e0e0"; // Light gray (secondary accent)

export default function DiscussionForum() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posts, setPosts] = useState([]);
  const [predictionValue, setPredictionValue] = useState("");

  const extractLinksFromParagraph = (paragraph) => {
    // Regular expression to match URLs
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    // Extract links from the paragraph using the regular expression
    const links = paragraph.match(urlRegex) || [];
    return links;
  };

  const addPosts = async (e) => {
    e.preventDefault();
    const fig = {
      method: "POST",
      body: JSON.stringify({
        title: title,
        description: description,
        author: localStorage.getItem("username"),
      }),
      headers: {
        "Content-type": "application/json",
      },
    };
    console.log(fig);
    fetchWithAuth("http://127.0.0.1:3000/api/post/create", fig)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data.error) {
          throw new Error(data.error);
        }
        setPosts((posts) => [...posts, data]);
      })
      .catch((err) => {
        console.log("Error in creating post:", err.message);
        alert(err.message);
      });
  };

  useEffect(() => {
    fetchWithAuth("http://127.0.0.1:3000/api/post/all")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <AppHeader></AppHeader>
      <Container>
        <div
          className="row"
          style={{ backgroundColor: "#f5f5f5", padding: "20px" }}
        >
          <ForumAccordion
            title="Welcome to Discussion Forum"
            description="This is a peer to peer forum. No Spam / Advertising / Self-promote in the forums is not allowed. Do not
            post copyright-infringing material. Do not post “offensive” posts, links or images. Do not cross post
            questions. Remain respectful of other members at all times."
            style={{
              backgroundColor: secondaryColor,
              borderRadius: "10px",
              padding: "20px",
              marginBottom: "20px",
            }}
          />
          <div className="discusson-forum" style={{
            border: "2px solid #ddd",
            borderRadius: "10px",
            padding: "0px 30px 30px 30px"
          }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "20px",
            }}
            className="my-4"
          >
            <h2>Start a Discussion</h2>
          </div>
          <Form>
            <Form.Group className="mb-3" controlId="formTitle">
              <Form.Label>Problem Title</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{
                  borderRadius: "5px",
                  backgroundColor: secondaryColor,
                  border: "1px solid #ddd",
                  padding: "10px",
                }}
              />
              <Form.Text className="text-muted" style={{ color: "#666" }}>
                Keep your title as short as possible
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDescription">
              <Form.Label>Desctiption</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                type="text"
                placeholder=""
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                style={{
                  borderRadius: "5px",
                  backgroundColor: secondaryColor,
                  border: "1px solid #ddd",
                  padding: "10px",
                }}
              />
              <Form.Text className="text-muted" tyle={{ color: "#666" }}>
                Elaborate Your Concern
              </Form.Text>
            </Form.Group>
              <Button variant="primary" type="submit" onClick={addPosts} style={{
                backgroundColor: "#55acee",
                border: "none",
                borderRadius: "20px",
                color: "white",
                cursor: "pointer",
                fontSize: "18px",
                fontWeight: "bold",
                padding: "15px 30px",
                textAlign: "center",
                textDecoration: "none",
                display: "inline-block",
                transition: "background-color 0.3s, color 0.3s",
                marginTop: "20px",
            }}>
              Submit
            </Button>
          </Form>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="my-4"
          >
            <h2>Browse Question</h2>
          </div>
          {posts.length == 0 ? (
            <div className="d-flex justify-content-center">
              <h5>No Post Found</h5>
            </div>
          ) : (
            posts.map((post) => <SinglePost post={post} />)
          )}
        </div>
      </Container>
    </>
  );
}
