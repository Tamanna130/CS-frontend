import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import AppHeader from '../templates/Base/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ForumAccordion from '../templates/Base/Accordion';
import SinglePost from './singlePost';
import {fetchWithAuth} from '../hooks/fetchHook';

export default function DiscussionForum() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [posts, setPosts] = useState([]);
  const [predictionValue, setPredictionValue] = useState('')


  const extractLinksFromParagraph = (paragraph) =>{
    // Regular expression to match URLs
    const urlRegex = /(https?:\/\/[^\s]+)/g;
     // Extract links from the paragraph using the regular expression
    const links = paragraph.match(urlRegex) || [];
    return links;
  }
  
  

  const addPosts = async (e) => {
    e.preventDefault();
<<<<<<< HEAD

        await fetch("http://localhost:5000", {
        method: 'POST',
        body: JSON.stringify({
            title: title,
            description: description,
            author: "Tamanna"
        }),
        headers: {
            'Content-type': 'application/json' ,
        },
    })
    .then((response) => response.json())
=======
    const fig={
      method: 'POST',
      body: JSON.stringify({
          title: title,
          description: description,
          author: localStorage.getItem('username'),
      }),
      headers: {
          'Content-type': 'application/json' ,
      },
  };
  console.log(fig);
    fetchWithAuth('http://127.0.0.1:3000/api/post/create', fig )
    .then((response) => {console.log(response); return response.json()})
>>>>>>> 95fc6ff400751a5811b07904a04da292f15d6daa
    .then((data) => {
        console.log(data)
        if(data.error ){
          throw new Error(data.error)
        }
        setPosts((posts) => [...posts,data]);
    })
    .catch((err) => {
        console.log("Error in creating post:", err.message);
        alert(err.message);
    });
};

    useEffect(() => {
<<<<<<< HEAD
      fetch("http://localhost:5000")
=======
      fetchWithAuth('http://127.0.0.1:3000/api/post/all')
>>>>>>> 95fc6ff400751a5811b07904a04da292f15d6daa
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
        <div className='row'>
        <ForumAccordion
            title="Welcome to Discussion Forum"
            description="This is a peer to peer forum. No Spam / Advertising / Self-promote in the forums is not allowed. Do not
            post copyright-infringing material. Do not post “offensive” posts, links or images. Do not cross post
            questions. Remain respectful of other members at all times."
        />
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className='my-4'>
          <h2>Start a Discussion</h2>
    </div>
    <Form>
      <Form.Group className="mb-3" controlId="formTitle">
        <Form.Label>Problem Title</Form.Label>
        <Form.Control type="text" placeholder="" value={title} onChange={(e) => setTitle(e.target.value)}/>
        <Form.Text className="text-muted">
        Keep your title as short as possible
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formDescription">
        <Form.Label>Desctiption</Form.Label>
        <Form.Control as="textarea" rows={3} type="text" placeholder="" value={description} onChange={(e) => setDescription(e.target.value)}/>
        <Form.Text className="text-muted">
        Elaborate Your Concern
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={addPosts}>
        Submit
      </Button>
    </Form>

    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className='my-4'>
          <h2>Browse Question</h2>
    </div>
    {posts.length == 0 ? <div className='d-flex justify-content-center'><h5>No Post Found</h5></div> : 
      posts.map((post) => <SinglePost post={post}/>)
    }
        
    
    </div>
    </Container>       
    </>
  );
}