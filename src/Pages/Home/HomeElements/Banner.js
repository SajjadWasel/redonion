import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div className='flex-column banner d-flex justify-content-center align-items-center text-center'>
            <h1>Best Food Waiting For Your Belly</h1>
            <div  className='mt-2 w-50 d-flex justify-content-center ms-5 ps-5'>
                <Form.Control className='w-75 rounded-pill' size="md" type="text" placeholder="Search Food Items" />
                <button className='rounded-pill btn-search'>Search</button>
            </div>


        </div>
    );
};

export default Banner;