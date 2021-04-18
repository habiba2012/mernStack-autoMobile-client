import React, { useEffect, useState } from 'react';
import './Testimonials.css';
import Testimonial from '../Testimonial/Testimonial'
import Jhony from '../../assets/images/mechanicImg3.jpg';


const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([])

    useEffect(() => {
        fetch('https://automobile-servicing.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, [])

    return (
        <section className="testimonials my-5 py-5">
            <div className="container">
                <div className="section-header">
                    <h5 className="text-uppercase text-danger">Testimonial</h5>
                    <h1>What Our Customer <br /> Says </h1>
                    <div className="card-deck mt-5">
                        {
                            testimonials.map(testimonial => <Testimonial key={testimonial.id} testimonial={testimonial}></Testimonial>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;