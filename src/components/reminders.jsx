import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Reminders = () => {
  const cardData = [
    {
        title: 'Weekly Covid Test',
        text: 'Ensure that you complete your weekly covid test before Friday 4pm. If you\'re unable to book a time slot please contact the medical centre!',
        updatedTime: '2 days remaining',
        bg: "secondary"
    },
    {
        title: 'Timesheet',
        text: 'Your timesheets are overdue for working in the office. Please complete them immediately before escalation is required.',
        updatedTime: '3 hours overdue',
        bg: "danger"
    }
];
  return (
      // xs = rows, md = columns 2x2 creates a grid
      // cardData gets simply mapped
      <div className="p-4 bg-gray-100 my-4 rounded">
        <h2 className="font-bold text-lg mb-2">Reminders:</h2>
      <Row xs={1} md={4} className="g-4"> 
          {cardData.map((data, index) => (
              <Col key={index}>
                  <Card bg={data.bg}>
                      <Card.Body>
                          <Card.Title>{data.title}</Card.Title>
                          <Card.Text>{data.text}</Card.Text>
                      </Card.Body>
                      <Card.Footer>
                          <small className="text-muted">{data.updatedTime}</small>
                      </Card.Footer>
                  </Card>
              </Col>
          ))}
      </Row>
      </div>
  )
};

export default Reminders;