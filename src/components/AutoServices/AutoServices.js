import React, { useEffect, useState } from 'react';
import Engine from '../../assets/images/serviceImg.jpg'
import AcRepair from '../../assets/images/serviceImg1.jpg'
import ServiceImg from '../../assets/images/serviceImg2.jpg'
import AutoService from '../AutoService/AutoService';

const AutoServices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5500/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <section className="services pt-5 mt-5">
            <div className="container">
                <div className="section-header text-center">
                    <h5 className="text-uppercase text-primary">Our services</h5>
                    <h1><span style={{ textDecoration: "underline", textDecorationColor: "red" }}>Services</span> <strong>We Provide</strong></h1>
                </div>
                <div className="row mt-5 pt-5">
                    {
                        services.map(service => <AutoService service={service}></AutoService>)
                    }
                </div>
            </div>
        </section>
    );
};

export default AutoServices;