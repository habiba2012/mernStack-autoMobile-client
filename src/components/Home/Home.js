import React from 'react';
import AutoServices from '../AutoServices/AutoServices';
import Brands from '../Brands/Brands';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Mechanics from '../Mechanics/Mechanics';
import ServiceFeature from '../ServiceFeature/Servicefeature';
import TopBanner from '../TopBanner/TopBanner';
import WhyUs from '../WhyUs/WhyUs';

const Home = () => {
    return (
        <div>
            <Header />
            <TopBanner />
            <Brands />
            <WhyUs />
            <AutoServices />
            <ServiceFeature />
            <Mechanics />
            <Footer />
        </div>
    );
};

export default Home;