import React, { useRef } from 'react';
import './signUp.css';
import { Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../images/logo2.png';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import toast, { Toaster } from 'react-hot-toast';
import { useUpdateProfile } from 'react-firebase-hooks/auth';









const SignUp = () => {

    //============ Firebase Hooks ==============
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile] = useUpdateProfile(auth);




    //============ Informations =============

    const usernameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');


    // ============= Other Variables ==================
    const navigate = useNavigate();







    const handleSubmit = async (event) => {
        event.preventDefault();

        const username = usernameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;


        await createUserWithEmailAndPassword(email, password);
        const successUpdate = await updateProfile({ displayName: username });

        if (successUpdate) {
            toast.success('Sign Up Successfull')
            navigate('/')
        }
        else {
            toast.error(error.message)
        }
    }






    return (
        <div className='signup d-flex flex-column align-items-center justify-content-center'>
            <img width={'25%'} src={Logo} alt="" />
            <Form onSubmit={handleSubmit} className='signup_form mb-5'>
                <Form.Control required ref={usernameRef} className='input' size="lg" type="text" placeholder="Name" />

                <Form.Control required ref={emailRef} className='input' size="lg" type="email" placeholder="Email" />

                <Form.Control required ref={passwordRef} className='input' size="lg" type="password" placeholder="Password" />

                {/* <Form.Control required ref={confirmPS_Ref} className='input' size="lg" type="password" placeholder="Confirm Password" /> */}
                <Toaster />


                


                <button
                    className='button_submit mt-4 mb-1' type="submit">
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