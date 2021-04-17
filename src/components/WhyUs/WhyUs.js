import React from 'react';
import Mechanic from '../../assets/images/mechanic.jpg';
import Price from '../../assets/images/money.png';
import Clock from '../../assets/images/clock.jpg';
import Client from '../../assets/images/rating.png';
import './WhyUs.css';
import { Link } from 'react-router-dom';

const WhyUs = () => {
    const whyUsData = [
        {
            img: Mechanic,
            title: "Expert Mechanics",
            description: "Most of the vehicles get damaged just because of maintenance neglect you take"
        },
        {
            img: Price,
            title: "Reasonable Price",
            description: "Most of the vehicles get damaged just because of maintenance neglect you take"
        },
        {
            img: Client,
            title: "Trusted by 5000 Clients",
            description: "Most of the vehicles get damaged just because of maintenance neglect you take"
        },
        {
            img: Clock,
            title: "Fast feature Delivery",
            description: "Most of the vehicles get damaged just because of maintenance neglect you take"
        }
    ];
    return (
        <div className="why-container">
            <div className="why-text">
                <h2><span>Why</span> <strong>choose us</strong></h2>
                <p>Most of the vehicles get damaged just because of maintenance neglect you take</p>
            </div>
            <section className="service-container">
                {whyUsData.map(data =>
                    <div className="service">
                        <img src={data.img} alt="" style={{ height: "115px" }} />
                        <h5 className="title">{data.title}</h5>
                        <p>{data.description}</p>
                        <button className="btn btn-danger btn-sm text-center">See More</button>
                    </div>
                )}
            </section>
        </div>
    );
};

export default WhyUs;