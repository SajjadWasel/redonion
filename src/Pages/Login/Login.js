import React, { useState } from 'react';
import './Login.css';
import { Form } from 'react-bootstrap';
import Logo from '../../images/logo2.png';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import toast, { Toaster } from 'react-hot-toast';




const Login = () => {

    //============ Firebase Hooks ================
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }
    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const navigate = useNavigate();
    const handleSignIn = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
        if (user) {
            navigate('/')
        }
        if(error){
            toast.error("Email or password wrong",
                {
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                }
            );
        }
    
    }

    





    return (
        <div className='login d-flex flex-column align-items-center justify-content-center'>
            <img width={'25%'} src={Logo} alt="" />
            <Form onSubmit={handleSignIn} className='login_form mb-5'>

                <Form.Control required onBlur={handleEmail} className='input' size="lg" type="email" placeholder="Email" />

                <Form.Control required onBlur={handlePassword} className='input' size="lg" type="password" placeholder="Password" />

                <Toaster />
                <button className='button_submit my-4' type="submit">
                    Login
                </button>
            </Form>


            <p>
                Not have an account? <Link to='/signup' className='text-decoration-none'>Sign Up</Link>
            </p>

        </div>
    );
};

export default Login;