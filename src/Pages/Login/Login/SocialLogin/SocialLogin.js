import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import './SocialLogin.css'

const SocialLogin = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    // Login এ্যান্ড Go প্রটেকটেড রাউট।
    if (googleUser) {
        navigate(from, { replace: true });
    }

    let errorElement;
    if (googleError || githubError) {
        errorElement = <p>Error: {googleError?.message} {githubError?.message}</p>
    }

    return (
        <div>
            {errorElement}
            <div className='social-login'>
                <button onClick={() => signInWithGoogle()}>Google Signin</button>
            </div>
            <div onClick={() => signInWithGithub()} className='social-login'>
                <button>Github Signin</button>
            </div>
        </div>
    );
};

export default SocialLogin;