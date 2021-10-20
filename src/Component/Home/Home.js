import React, { useEffect, useState } from 'react';
import { Button, Card, Carousel, Col, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Home.css"

const Home = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('./serviceDetails.json')
            .then(res => res?.json())
            .then(data => setServices(data))
    }, [])
    return (
        <>
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./images/header-img-2.png"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./images/header-img-1.jpg"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./images/header-img-3.jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="bg-primary text-white text-center py-4 my-4">
                <h2>Our Expert Health Care Services at Home Include</h2>
            </div>
            <Container>
                <Row xs={1} md={3} className="g-4">

                    {
                        services.slice(0, 6).map((service) => (
                            <Col>
                                <Card>
                                    <Card.Img variant="top" className="service-img" src={service.img} />
                                    <Card.Body>
                                        <Card.Title>{service.serviceName}</Card.Title>
                                        <Card.Text>
                                            {service.description.slice(0, 100)}
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer className="text-center">

                                        <Link to={`/service/${service.serviceId}`}>
                                            <Button>More Details

                                            </Button>
                                        </Link>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
            <div className="bg-primary text-white text-center py-4 my-4">
                <h2>THANK YOU to Our Amazing Clients</h2>
            </div>
            <div className="container">
                <Row className="d-flex align-items-center justify-content-center border">
                    <Col md="4">
                        <img className="client-img 5" src="./images/client-1.jpg" alt="" />
                    </Col>
                    <Col md="8" className="text-center">
                        <h2>PRIYA</h2>
                        <h6>"I needed someone reliable to stay with and help my mother who was home alone at the time. Abrar sent a female attendant over in the next few hours even though it was already late at night, so someone could be with her at all times. He really helped me sleep in peace that night. Thank you!"</h6>
                    </Col>
                </Row>
            </div>
            <div className="container">

                <Row className="d-flex align-items-center justify-content-center bg-light">

                    <Col md="8" className="text-center">
                        <h2>VARUN</h2>
                        <h6>"I had a surgery and needed daily medical dressing. I called Abrar and am happy to recommend his service. He came home and changed my dressing with utmost care. He is like a friend now and I contact him for all my home medical needs"</h6>
                    </Col>
                    <Col md="4">
                        <img className="client-img 5" src="./images/client-2.jpg" alt="" />
                    </Col>
                </Row>
            </div>
            <div className="container">
                <Row className="d-flex align-items-center justify-content-center border">
                    <Col md="4">
                        <img className="client-img 5" src="./images/client-3.jpg" alt="" />
                    </Col>
                    <Col md="8" className="text-center">
                        <h2>SHILPA</h2>
                        <h6>"Unfortunately my mother suffered from severe illness and I requested Mr. Abrar for help. He constantly helped us to meet our request 24*7. I am satisfied with the services and care providers. I owe you a debt of gratitude. I'm eternally grateful for your support. Thank you."</h6>
                    </Col>
                </Row>
            </div>
            <div className="bg-primary text-white text-center py-4 my-4">
                <h2>Available in Cities Across Bangladesh</h2>
            </div>
            <Row>
                <Col className="md-3">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img className="city-img" variant="top" src="./images/Dhaka.jpg" />
                        <Card.Body>
                            <Card.Title>Dhaka</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="md-3">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img className="city-img" variant="top" src="./images/sylhet.jpg" />
                        <Card.Body>
                            <Card.Title>Sylhet</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="md-3">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img className="city-img" variant="top" src="./images/chattogram.jpg" />
                        <Card.Body>
                            <Card.Title>Chattogram</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="md-3">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img className="city-img" variant="top" src="./images/rajshahi.jpg" />
                        <Card.Body>
                            <Card.Title>Rajshahi</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default Home;