import React from 'react';
import './Testimonial.css';
import { Button, Card } from 'react-bootstrap';
import fastDelivery_Img from "../../../images/home-delivery-img.png";
import delivery_img from '../../../images/delivery-img.png';
import cheif_img from '../../../images/chef-img.png';
import { BiBell } from 'react-icons/bi';
import { BsArrowRightShort } from 'react-icons/bs';





const Testimonial = () => {
    return (
        <div className='d-flex justify-content-center flex-wrap align-items-center mb-5'>

            {/* ============== Card 1 =============== */}
            <Card className='border-0 m-3' style={{ width: '22rem' }}>
                <Card.Img variant="top" src={delivery_img} />
                <Card.Body className='d-flex'>
                    <div className='bell_icon h-50 text-light'>
                        <BiBell></BiBell>
                    </div>
                    <div>
                        <h5>A good auto responder in</h5>
                        <p>
                            <small className="text-secondary">
                                Lorem ipsum dolor sit onkk amet consectetur adipisicing elit. Dolore, fuga! some none
                            </small>
                        </p>
                        <button className='btn_testimonial'>
                            See More <BsArrowRightShort className='right_arrow_icon'></BsArrowRightShort>
                        </button>
                    </div>
                </Card.Body>
            </Card>


            {/* ============== Card w =============== */}
            <Card className='border-0 m-3' style={{ width: '22rem' }}>
                <Card.Img variant="top" src={cheif_img} />
                <Card.Body className='d-flex'>
                    <div className='bell_icon h-50 text-light'>
                        <BiBell></BiBell>
                    </div>
                    <div>
                        <h5>A good auto responder in</h5>
                        <p>
                            <small className="text-secondary">
                                Lorem ipsum dolor sit onkk amet consectetur adipisicing elit. Dolore, fuga! some none
                            </small>
                        </p>
                        <button className='btn_testimonial'>
                            See More <BsArrowRightShort className='right_arrow_icon'></BsArrowRightShort>
                        </button>
                    </div>
                </Card.Body>
            </Card>


            {/* ============== Card 3 =============== */}
            <Card className='border-0 m-3' style={{ width: '22rem' }}>
                <Card.Img variant="top" src={fastDelivery_Img} />
                <Card.Body className='d-flex'>
                    <div className='bell_icon h-50 text-light'>
                        <BiBell></BiBell>
                    </div>
                    <div>
                        <h5>A good auto responder in</h5>
                        <p>
                            <small className="text-secondary">
                                Lorem ipsum dolor sit onkk amet consectetur adipisicing elit. Dolore, fuga! some none
                            </small>
                        </p>
                        <button className='btn_testimonial'>
                            See More <BsArrowRightShort className='right_arrow_icon'></BsArrowRightShort>
                        </button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Testimonial;