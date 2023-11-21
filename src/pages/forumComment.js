import React from 'react';
import Container from 'react-bootstrap/Container';
import AppHeader from '../templates/Base/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ForumAccordion from '../templates/Base/Accordion';
import CommentImage from '..//templates/Base/images/userdefault.jpg'

export default function ForumComment() {
  return (
    <>
    <AppHeader></AppHeader>
    <Container>
        <div className='row'>
        <ForumAccordion
            title="How to determine candidate key?"
            description="Given the Relation R with attributes ABCDE. You are given the following dependencies: A - B, BC - E, and ED - A. I already have the answer which is CDE, ACD, and BCD. I just need to know how to do it. Thanks. "
        />
    <div className='my-4'>
          <h3>Post a Comment</h3>
    </div>
    <Form>
      <Form.Group className="mb-3" controlId="formComment">
        <Form.Label>Type your comment</Form.Label>
        <Form.Control type="text" placeholder="" />
        <Form.Text className="text-muted">
        Be respectful to everyone
        </Form.Text>
      </Form.Group>x
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

    <div className='my-4'>
          <h3>Discussion</h3>
    </div>

    <div className="container mb-5" id="ques">
        <div className="media my-3">
            <img style={{ borderRadius: '50%', height: '54px', width: '54px', padding: '5px' }} src={CommentImage}/>
            <div className="media-body">
                    <h5>Profile Name - at Time</h5>
                    <p>The candidate key can be determined from given set of functional dependency in a relation. It is an attribute or minimal set of attributes whose closure is set of all attributes in a relation.
                    </p>
            </div>
        </div>
    </div>
    




    </div>
    </Container>       
    </>
  );
}