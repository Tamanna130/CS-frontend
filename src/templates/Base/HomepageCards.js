import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import DiscussionForumImage from './images/discussionforum.jpg';
import MockTestImage from './images/exam.jpg';
import QuestionBankImage from './images/questionbank.jpg'


export default function SectionCard() {
  return (
    <div className='row' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '50px'}}>
      <div className='col'>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={DiscussionForumImage} />
          <Card.Body>
            <Card.Title>Discussion Forum</Card.Title>
            <Card.Text>
            Discuss your study related concerns here.
            </Card.Text>
            <Button variant="primary" href='/studentroom/discussionforum'>Visit Section</Button>
          </Card.Body>
        </Card>
      </div>
      <div className='col'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={MockTestImage} />
        <Card.Body>
          <Card.Title>Mock Test</Card.Title>
          <Card.Text>
          Perform a mock test and review your answers.
          </Card.Text>
          <Button variant="primary">Visit Section</Button>
        </Card.Body>
      </Card>
      </div>
      <div className='col'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={QuestionBankImage} />
        <Card.Body>
          <Card.Title>Question Bank</Card.Title>
          <Card.Text>
          Solve previous questions and take a better preparation.
          </Card.Text>
          <Button variant="primary">Visit Section</Button>
        </Card.Body>
      </Card>
      </div>
  </div>
  );
}
