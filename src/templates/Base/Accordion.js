import Accordion from 'react-bootstrap/Accordion';

export default function ForumAccordion({title, description}) {
  return (
    <Accordion defaultActiveKey="0" className='my-4'>
      <Accordion.Item eventKey="0">
        <Accordion.Header>{title}</Accordion.Header>
        <Accordion.Body>
            {description}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
