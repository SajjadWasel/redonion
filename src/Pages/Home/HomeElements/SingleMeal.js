import React from 'react';
import { Card } from 'react-bootstrap';
import './SingleMeal.css'

const singleMeal = ({meal}) => {

    const {name, tagline, price, img} = meal;
    const image = img;

    return (
        <Card className='single-card mx-5 mt-3 text-center p-3 border-0' style={{ width: '18rem', height: '22rem'}}>
            <Card.Img className='mx-auto w-75' height={'100%'} variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <small className='text-secondary'>
                    {tagline}
                </small>
                <h3>${price}</h3>
            </Card.Body>
        </Card>
    );
};

export default singleMeal;


