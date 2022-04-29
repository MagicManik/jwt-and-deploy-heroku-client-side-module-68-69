import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './register.css'
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../Login/SocialLogin/SocialLogin';

const Register = () => {

    // ________________________________________________
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [agree, setAgree] = useState(false);


    // ________________________________________________
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });


    // ________________________________________________
    const [updateProfile, updating, updatedError] = useUpdateProfile(auth);


    // ________________________________________________
    const navigate = useNavigate();
    if (user) {
        navigate('/')
    }


    // ________________________________________________
    const handleNameBlur = event => {
        setName(event.target.value);
    }
    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }


    // ________________________________________________
    const handleCreateUser = async (event) => {
        event.preventDefault();

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        alert('Updated profile');

    }



    return (
        <div className='w-75 mx-auto mt-5'>
            <Form onSubmit={handleCreateUser} className='w-50 mx-auto'>
                <h2 className='my-3'>Please Register</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your name</Form.Label>
                    <Form.Control onBlur={handleNameBlur} type="text" placeholder="Your name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={() => setAgree(!agree)} className={`${agree ? 'text-primary' : 'text-danger'}`} type="checkbox" label="Accept Genius Car Terms and Conditions" />
                </Form.Group>

                {/* <Button className={agree ? 'w-100' : 'disabled w-100'} variant="primary" type="submit"> */}
                <Button className={`w-100 ${agree ? '' : 'disabled'}`} variant="primary" type="submit">
                    Register
                </Button>

            </Form>
            <div className='w-50 mx-auto my-2'>

                <p>Already have an account? <Link to="/login">Please Login</Link></p>

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

export default Register;