import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const News = () => {
    const cardData = [
        {
            title: 'Working From Home Guidlines',
            text: 'Stay informed on best practices for remote work. Ensure you are equipped with the right tools and strategies for effective communication and productivity while working from home...',
            updatedTime: '2 days remaining',
            bg: "secondary"
        },
        {
            title: 'Travel Restrictions Update',
            text: 'International travel regulations are frequently changing. Before planning your trip, check the latest COVID-19 travel restrictions and quarantine requirements for your destination country...',
            updatedTime: '3 hours overdue',
            bg: "danger"
        },
        {
            title: 'Local COVID-19 Measures',
            text: 'Local COVID-19 measures and restrictions can impact daily life. Find out about curfews, mask mandates, and social distancing rules in your area...',
            updatedTime: 'Updated just now',
            bg: "secondary"
        },
        {
            title: 'Vaccination Schedules and Locations',
            text: 'Find out where and when you can get vaccinated in your area. Stay safe by staying informed about the latest vaccination schedules, and learn about the benefits of getting vaccinated against COVID-19...',
            updatedTime: 'Updated yesterday',
            bg: "secondary"
        }
    ];
    return (
        // xs = rows, md = columns 2x2 creates a grid
        // cardData gets simply mapped
        <div className="p-4 bg-gray-100 my-4 rounded">
            <h2 className="font-bold text-lg mb-2">Breaking News:</h2>
            <Row xs={2} md={2} className="g-4"> 
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
    );
};

export default News;

