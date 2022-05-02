import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from './SocialLogin/SocialLogin';
import './Login.css'


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // console.log(email, password)
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const handleResetPassword = async () => {
        await sendPasswordResetEmail(email);
        alert('Sent email');
    }


    let errorElement;
    if (error) {
        errorElement = <p>Error: {error.message}</p>
    }


    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    if (user) {
        // navigate(from, { replace: true });
    }


    // catch input email
    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    // catch input password
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }


    // ______ handle submit form _______
    const handleLogin = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)


        // Post data in server for token purpos
        fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                localStorage.setItem('accessToken', data.accessToken);
                navigate(from, { replace: true });
            })

    }

    return (
        <div className='w-75 mx-auto mt-5'>
            <Form onSubmit={handleLogin} className='w-50 mx-auto'>
                <h2 className='my-3'>Please Login</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" />
                </Form.Group>
                {errorElement}
                <Button className='w-100' variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <div className='w-50 mx-auto my-3'>
                <p>Already have an account? <Link to="/register">Please Register</Link></p>
                <p>Forgotten Password? <button onClick={handleResetPassword} className='my-link-button'>Reset Password</button></p>

                <div className='methord-divided'>
                    <div className='methord-divided-border'>

                    </div>
                    <p>Or</p>
                    <div className='methord-divided-border'>

                    </div>
                </div>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;