import React from 'react';
import { Link } from 'react-router-dom';
import './TopBanner.css';
const TopBanner = () => {
    return (
        <section className="banner-section">
            <div className="overlay-img">
                <div className="container align-items-center pt-5 mt-5" style={{ height: "100vh" }}>
                    <div className="text-white overlay">
                        <h5>We Give you</h5>
                        <h1>QUALITY <span style={{ color: "red" }}> AUTO REPAIR</span></h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the</p>
                        <Link className="btn btn-primary" style={{ backgroundColor: "red" }} to="/appointment">Get Appointment</Link>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default TopBanner;