import React, { useState } from 'react';
import './signUp.css';
import { Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../images/logo2.png';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import toast, { Toaster } from 'react-hot-toast';






const SignUp = () => {

    //============ Firebase Hooks ==============
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);




    //============ Informations ==============
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPS, setConfirmPS] = useState('');


    const handleName = (event) => {
        setName(event.target.value)
    }
    const handleEmail = (event) => {
        setEmail(event.target.value)
    }
    const handlePassword = (event) => {
        setPassword(event.target.value)
    }
    const handleConfirmPS = (event) => {
        setConfirmPS(event.target.value)
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        if (password === confirmPS) {
            createUserWithEmailAndPassword(email, password);
            toast.success('User Created Successfully',
                {
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                }
            )

        }

        else {
            toast.error("Password didn't match",
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

    const navigate = useNavigate();

    if (user) {
        navigate('/')
    }





    return (
        <div className='signup d-flex flex-column align-items-center justify-content-center'>
            <img width={'25%'} src={Logo} alt="" />
            <Form onSubmit={handleSubmit} className='signup_form mb-5'>
                <Form.Control required onBlur={handleName} className='input' size="lg" type="text" placeholder="Name" />

                <Form.Control required onBlur={handleEmail} className='input' size="lg" type="email" placeholder="Email" />

                <Form.Control required onBlur={handlePassword} className='input' size="lg" type="password" placeholder="Password" />

                <Form.Control required onBlur={handleConfirmPS} className='input' size="lg" type="password" placeholder="Confirm Password" />
                <Toaster />

                <button className='button_submit mt-4 mb-1' type="submit">
                    Sign Up
                </button>
            </Form>

            <p>
                Already have an account? <Link to='/login' className='text-decoration-none'>Login</Link>
            </p>


        </div>
    );
};

export default SignUp;