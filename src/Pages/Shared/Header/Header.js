import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    };

    return (
        <Navbar className='navbar-bg p-0' sticky='top' collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand as={Link} className='text-primary' to="/"><h6>Genius Car Service</h6></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className='text-black mx-auto' as={Link} to="/checkout">Checkout</Nav.Link>

                    </Nav>
                    <Nav>
                        {/* টার্নারি অপারেটর ইউজ করা হয়েছে। যদি ইউজার থাকে তাহলে প্রথম div টা দেখাবে আর যদি ইউজার না থাকে তাহলে পরের div টা দেখাবে। */}
                        {
                            user ?
                                <div className='d-flex justify-content-center flex-lg-row flex-column align-items-center'>
                                    <Nav.Link className='text-black' as={Link} to="/addservice">Add service</Nav.Link>
                                    <Nav.Link className='text-black' as={Link} to="/manageservices">Manage Services</Nav.Link>
                                    <button onClick={logout}>Log Out</button>
                                </div>
                                :
                                <div className='d-flex justify-content-center flex-lg-row flex-column align-items-center'>
                                    <Nav.Link className='text-black' as={Link} to="/login">
                                        Login
                                    </Nav.Link>
                                    <Nav.Link className='text-black' as={Link} to="/register">
                                        Register
                                    </Nav.Link>
                                </div>
                        }
                        <Nav.Link className='text-black mx-auto' as={Link} to="/about">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;