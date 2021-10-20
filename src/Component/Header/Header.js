import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import "./Header.css";

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <div>
                <Navbar bg="success" expand="lg">
                    <Container fluid>
                        <img className="logo-img" src="../images/Home-Care.png" alt="" />
                        <Navbar.Brand className="site-name" href="/home">Home Care BD</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Stack direction="horizontal" gap={3}>
                                    <NavLink className="nav-menu" to="/home">Home</NavLink>
                                    <NavLink className="nav-menu" to="/services">Service</NavLink>
                                    <NavLink className="nav-menu" to="/appointment">Appointment</NavLink>
                                    <NavLink className="nav-menu" to="/about">About</NavLink>
                                    {user?.email && <span className="user-name" style={{ color: 'white' }}>Hello {user.displayName} </span>}
                                    {
                                        user.email ?
                                            <button className="btn-info" onClick={logOut}>log out</button>
                                            :
                                            <NavLink className="nav-menu" to="/login">Login/Register</NavLink>}
                                </Stack>

                            </Nav>
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="dark">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    );
};

export default Header;