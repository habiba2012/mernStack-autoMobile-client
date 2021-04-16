import React from 'react';
import './Testimonials.css';
import Testimonial from '../Testimonial/Testimonial'
import Jhony from '../../assets/images/mechanicImg3.jpg';


const Testimonials = () => {
    const testimonialsData = [
        {
            quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
            name: 'Christian Andrue ',
            from: 'Copenhagen',
            img: Jhony
        },
        {
            quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
            name: 'Sofia Karlson',
            from: 'Søborg',
            img: Jhony
        },
        {
            quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
            name: 'Pia Hanson',
            from: 'Gentofte',
            img: Jhony
        }
    ]
    return (
        <section className="testimonials my-5 py-5">
            <div className="container">
                <div className="section-header">
                    <h5 className="text-uppercase text-danger">Testimonial</h5>
                    <h1>What Our Customer <br /> Says </h1>
                    <div className="card-deck mt-5">
                        {
                            testimonialsData.map(testimonial => <Testimonial testimonial={testimonial}></Testimonial>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;