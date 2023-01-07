import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BiCart } from 'react-icons/bi';
import { useParams } from 'react-router-dom';
import './SingleFood.css';

const SingleFood = () => {
    const { food, foodId } = useParams();
    console.log(food, foodId)

    const [meal, setMeal] = useState();

    const api = `/${food}.json`;
    console.log(api)
    useEffect(() => {
        fetch(api)
            .then(res => res.json())
            .then(data => setMeal(data[foodId]))
    }, [])

    console.log(meal)
    let [number, setNumber] = useState(1);

    console.log(number);



    return (
        <Container className='meal'>
            <div className="container row">
                <div className='col-md-6 meal-content'  >
                    <h1 className='fw-bold'>{meal?.name}</h1>
                    <div className='meal-detail'>
                        <p className='text-secondary mt-4'>
                            <small>{meal?.tagline}. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, fuga. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, accusantium!</small>
                        </p>
                    </div>
                    <div className='d-flex align-items-center'>
                        <h2>${meal?.price}</h2>
                        <div className='d-flex align-items-center counter'>
                            <button
                                onClick={
                                    () => number > 1 ?
                                        setNumber(number - 1) :
                                        setNumber(number)
                                }
                                className='btn btn-link fw-bold  text-decoration-none btn-count'>-</button>

                            <h3>{number}</h3>

                            <button
                                onClick={
                                    () => setNumber(number + 1)
                                }
                                className='btn btn-link fw-bold  text-decoration-none btn-count'>+</button>
                        </div>

                    </div>
                    <button className='crimson-btn rounded-pill mt-3 d-flex align-items-center justify-content-center'>
                        <BiCart className='me-2'/>
                        Add
                    </button>
                </div>
                <div className='col-md-6'>
                    <img className='meal-img' src={meal?.img} alt="" />
                </div>
            </div>
        </Container>
    );
};

export default SingleFood;