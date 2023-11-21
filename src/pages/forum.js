import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import AppHeader from '../templates/Base/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ForumAccordion from '../templates/Base/Accordion';
import SinglePost from './singlePost';


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
  
  // Example usage:
  // var sampleParagraph = "http://9779.info/%E6%A0%91%E5%8F%B6%E7%B2%98%E8%B4%B4%E7%94%BB/";
  
  // var extractedLinks = extractLinksFromParagraph(sampleParagraph);
  
  // console.log("Extracted Links:", extractedLinks);
  
  

  const addPosts = async (e) => {
    e.preventDefault();

        await fetch('http://127.0.0.1:3000/api/post/create', {
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
    .then((data) => {
        console.log(data)
        if(data.error ){
          throw new Error(data.error)
        }
        setPosts((posts) => [data, ...posts]);
    })
    .catch((err) => {
        console.log("Error in creating post:", err.message);
        alert(err.message);
    });
};

    useEffect(() => {
      fetch('http://127.0.0.1:3000/api/post/all')
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