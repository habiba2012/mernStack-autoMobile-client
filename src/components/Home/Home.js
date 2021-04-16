import React from 'react';
import AutoServices from '../AutoServices/AutoServices';
import Blogs from '../Blogs/Blogs';
import Brands from '../Brands/Brands';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Mechanics from '../Mechanics/Mechanics';
import ServiceFeature from '../ServiceFeature/Servicefeature';
import Testimonials from '../Testimonials/Testimonials';
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
            <Blogs />
            <Testimonials />
            <Mechanics />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;