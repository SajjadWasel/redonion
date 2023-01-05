import React, { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import './MealMenu.css';
import SingleMeal from './SingleMeal';

const MealMenu = () => {

    const [mainMeal, setMainMeal] = useState([]);

    const [meals1, setMeals1] = useState([]);
    useEffect(() => {
        fetch('./breakfast.json')
            .then(res => res.json())
            .then(data => setMeals1(data))
    }, [])




    const [meals2, setMeals2] = useState([]);
    useEffect(() => {
        fetch('./lunch.json')
            .then(res => res.json())
            .then(data => setMeals2(data))
    }, [])


    const [meals3, setMeals3] = useState([]);
    useEffect(() => {
        fetch('./dinner.json')
            .then(res => res.json())
            .then(data => setMeals3(data))
    }, [])






    // =============== Brakfast Click =============

    const [breakfast, setBreakfast] = useState(true);
    const breakfastClick = () => {
        setBreakfast(true);
        setLunch(false);
        setDinner(false);
        setMainMeal(meals1)
    };

    // =============== Brakfast Lunch =============
    const [lunch, setLunch] = useState(false);
    const LunchClick = () => {
        setBreakfast(false);
        setLunch(true);
        setDinner(false);
        setMainMeal(meals2)
    };

    // =============== Brakfast Night =============
    const [dinner, setDinner] = useState(false);
    const DinnerClick = () => {
        setBreakfast(false);
        setLunch(false);
        setDinner(true);
        setMainMeal(meals3)
    };



    return (
        <>
            <div className='d-flex justify-content-center'>
                <Nav variant="pills" defaultActiveKey="/home">
                    {
                        breakfast ?
                            <button style={{ borderBottom: '3px solid #F91944' }} onClick={breakfastClick} className='meal-link'>Breakfast</button>
                            :
                            <button onClick={breakfastClick} className='meal-link'>Breakfast</button>
                    }

                    {
                        lunch ?
                            <button style={{ borderBottom: '3px solid #F91944' }} onClick={LunchClick} className='meal-link'>Lunch</button>
                            :
                            <button className='meal-link' onClick={LunchClick}>Lunch</button>
                    }

                    {
                        dinner ?
                            <button style={{ borderBottom: '3px solid #F91944' }} onClick={DinnerClick} className='meal-link'>Dinner</button>
                            :
                            <button className='meal-link' onClick={DinnerClick}>Dinner</button>
                    }


                </Nav>




            </div>



            <div className='d-flex justify-content-center align-items-center flex-wrap'>
                {
                    mainMeal.length === 0 ?
                        meals1?.map(meal => <SingleMeal key={meal.id} meal={meal}></SingleMeal>)
                        :
                        mainMeal?.map(meal => <SingleMeal key={meal.id} meal={meal}></SingleMeal>)
                }
            </div>
        </>
    );
};

export default MealMenu;