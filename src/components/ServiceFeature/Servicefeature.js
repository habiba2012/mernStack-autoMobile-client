import React from 'react';
import FeatureImg from '../../assets/images/serviceFeature.jpg'
import './ServiceFeature.css'

const ServiceFeature = () => {
    return (
        <section className="features-service pb-0 pb-md-5 my-5">
            <div className="container mb-5">
                <div className="row mt-5 mb-5">
                    <div className="col-md-5">
                        <img className="img-fluid" src={FeatureImg} alt="" />
                    </div>

                    <div className="col-md-7">
                        <h2>Sharing Smile <br /> through Car Caring  </h2>
                        <p className="">Most of the vehicles get damaged just because of
                         maintenance neglect. If you take care of your. </p>
                        <button className="btn btn-primary">Learn More </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceFeature;