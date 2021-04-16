import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import FooterCol from './FooterCol';
import Logo from '../../assets/images/logoImg.png';


const Footer = () => {
    const noNamed = [
        { name: "Booking", link: "/booking" },
        { name: "Engine Diagnostics", link: "/engine/diagnostics" },
        { name: "Anti-Lock Brake", link: "/anti-lock" },
        { name: "Air Conditioning Evac", link: "/air-conditioning" },
        { name: "Performance Updates", link: "/performance" },
        { name: "Check Up", link: "/checkup" }
    ]
    const ourAddress = [
        { name: "Søborg Torv - 248", link: "//google.com/map" },
        { name: "Gladsaxe", link: "//google.com/map" },

    ]
    const latestNews = [
        { name: "Latest News", link: "/services" },
        { name: "How can I measure Temperature", date: "January 26, 2021", link: "/booking" },
        { name: "How can I measure Temperature", date: "January 26, 2021", link: "/engine-diagnostics" },
        { name: "How can I measure Temperature", date: "January 26, 2021", link: "/anti-lock" },

    ]
    const services = [
        { name: "Our Services", link: "/services" },
        { name: "Booking", link: "/booking" },
        { name: "Engine Diagnostics", link: "/engine/diagnostics" },
        { name: "Anti-Lock Brake", link: "/anti-lock" },
        { name: "Air Conditioning repair", link: "/air-conditioning" },
        { name: "Performance Updates", link: "/performance" },
        { name: "Check Up", link: "/checkup" }
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={<img src={Logo} alt="" />} menuItems={noNamed} />
                    <FooterCol key={2} menuTitle="Services" menuItems={services} />
                    <FooterCol key={3} menuTitle="Latest News" menuItems={latestNews} />
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5 text-white">
                            <h6>Call now</h6>
                            <button className="btn btn-danger">+4553345181</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center text-white">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>

    );
};

export default Footer;