import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import { Nav, Navbar } from 'react-bootstrap';
import NavLogo from '../../images/logo2.png';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './Header.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useSignOut } from 'react-firebase-hooks/auth';






const Header = () => {

    //=============== Firebase Variables =============

    const [user, loading, error] = useAuthState(auth);

    const [signOut, loading1, error1] = useSignOut(auth);




    return (
        <Navbar collapseOnSelect expand="lg" variant="light">
            <Container>
                <Navbar.Brand as={Link} to="/home">
                    <img width={150} className='d-inline m-0 p-0' src={NavLogo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className='ms-md-auto d-md-flex align-items-center'>
                        <Nav.Link className='text-dark' as={Link} to='/'>
                            <AiOutlineShoppingCart className='fs-4'></AiOutlineShoppingCart>
                        </Nav.Link>


                        {
                            user ?
                                <Nav.Link className='text-dark' as={Link} to='/login'>{user?.displayName}</Nav.Link>
                                :
                                <Nav.Link className='text-dark' as={Link} to='/login'>Login</Nav.Link>
                        }

                        {
                            user ?

                                <button className='crimson-btn rounded-pill'
                                    onClick={async () => {
                                        const success = await signOut();
                                        if (success) {
                                            alert('You are sign out');
                                        }
                                    }}
                                >Log Out</button>
                                :
                                <Nav.Link className='text-dark' as={Link} to='/signup'>
                                    <button className='crimson-btn rounded-pill'>Sign Up</button>
                                </Nav.Link>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;