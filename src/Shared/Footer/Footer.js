import React from 'react';
import './Footer.css';
import Logo from '../../images/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer pb-5'>
            <div className='d-flex justify-content-between'>
                <div>
                    <img className='h-25 w-25 m-5' src={Logo} alt="" />
                </div>
                <div className='footer_row d-flex m-5'>
                    <div className='d-flex flex-column m-5'>
                        <Link className='footer_link'>Home</Link>
                        <Link className='footer_link'>About</Link>
                        <Link className='footer_link'>Services</Link>
                        <Link className='footer_link'>Testimonial</Link>
                    </div>
                    <div className='footer_row d-flex flex-column m-5'>
                        <Link className='footer_link'>Sign In</Link>
                        <Link className='footer_link'>Sign Up</Link>
                        <Link className='footer_link'>Cart</Link>
                        <Link className='footer_link'>Wish List</Link>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-between m-5 mb-0 text-light'>
                <div>
                        <p className='text-center text-secondary'><b> Copyright © {new Date().getUTCFullYear()} Red Onion Food</b></p>
                </div>
                <div className='footer_row d-flex'>
                    <Link className='footer_link ms-5'>Term Of Condition</Link>
                    <Link className='footer_link ms-5'>Privacy Policy</Link>
                    <Link className='footer_link ms-5'>Pricing</Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;