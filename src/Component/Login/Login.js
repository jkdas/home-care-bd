import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle, handleRegistration, handleEmailChange, handlePasswordChange, handleNameChange, error, toggleLogin, isLogin } = useAuth();

    return (
        <>
            <div className="container w-50 my-5 p-5 bg-info">
                <h2 className="mb-3 text-center">Please {isLogin ? 'Sign In' : 'Register'}</h2>

                <Form onSubmit={handleRegistration}>
                    {!isLogin && <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control onBlur={handleNameChange} type="text" placeholder="Enter Name" required />
                    </Form.Group>}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" required />
                    </Form.Group>
                    <div className="mb-3 text-danger">
                        {error}
                    </div>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check onChange={toggleLogin} type="checkbox" label="Already Registered?" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        {isLogin ? 'Sign In' : 'Register'}
                    </Button>
                </Form>
                {/* <p>new to our website? <Link to="/login">Register Here</Link></p> */}
                <div>-------or----------</div>

                <Button onClick={signInUsingGoogle} variant="primary">Google Sign In</Button>
            </div>
        </>
    );
};

export default Login;