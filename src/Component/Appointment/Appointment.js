import React from 'react';
import { Button, Col, FloatingLabel, Form, Row } from 'react-bootstrap';

const Appointment = () => {
    return (
        <>
            <div className="bg-secondary">
                <div className="container">
                    <h2 className="mb-4 text-center text-white">Make an Appointment</h2>

                    <Row className="ms-4">
                        <Col md="5">
                            <div>
                                <img className="img-fluid" src="./images/appointment.png" alt="" />
                            </div>

                        </Col>
                        <Col md="7" className="p-3">
                            <Form>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Name*" required />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email*" required />
                                    </Form.Group>
                                </Row>

                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridCity">
                                        <Form.Label>Mobile No</Form.Label>
                                        <Form.Control placeholder="Mobile No*" required />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridZip">
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control placeholder="Address" />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridState">
                                        <Form.Label>Services</Form.Label>
                                        <Form.Select defaultValue="Choose...">
                                            <option>Choose a Service</option>
                                            <option>Elder Care</option>
                                            <option>Patient Care</option>
                                            <option>Baby Care</option>
                                            <option>Nursing Care</option>
                                            <option>Dressing Care</option>
                                            <option>Physiotherapy Care</option>
                                        </Form.Select>
                                    </Form.Group>


                                </Row>
                                <FloatingLabel className="mb-3" controlId="floatingTextarea" label="Your Message">
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Leave your message"
                                        style={{ height: '150px' }}
                                    />
                                </FloatingLabel>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>

                    </Row>
                </div>
            </div>

        </>
    );
};

export default Appointment;