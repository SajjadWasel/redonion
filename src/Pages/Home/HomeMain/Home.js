import Banner from '../HomeElements/Banner';
import Testimonial from '../HomeElements/Testimonial';
import MealMenu from '../HomeElements/MealMenu';
import './Home.css';

const Home = () => {

    return (
        <>
            {/* ========== Banner ============ */}
            <Banner></Banner>

            {/* ============ Meals =========== */}
        
            <h1 className='text-center my-5 '>Our <span style={{ color: '#F91944' }}>Meals</span></h1>
            <MealMenu></MealMenu>


            {/* ============ Why Choose Us ============ */}
            <h1 className='text-center my-5 '>Why <span style={{ color: '#F91944' }}>Choose Us?</span></h1>
            <Testimonial></Testimonial>

        </>
    );
};

export default Home;