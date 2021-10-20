import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./ServiceDetails.css";

const ServiceDetails = (props) => {
    // Destructuring from courses
    const { serviceId, serviceName, description, img } = props.service;
    //Dynamic route url 
    const url = `/service/${serviceId}`;
    return (
        <Col>
            <Card>
                <Card.Img variant="center" className="service-img" src={img} />
                <Card.Body>
                    <Card.Title>{serviceName}</Card.Title>
                    <Card.Text>
                        {description.slice(0, 100)}
                    </Card.Text>

                </Card.Body>
                <Card.Footer className="text-center">

                    <Link to={url}>
                        <Button>
                            More Details
                        </Button>
                    </Link>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default ServiceDetails;