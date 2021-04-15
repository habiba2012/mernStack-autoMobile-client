import React from 'react';
import Fredric from '../../assets/images/motorMechanic.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
const Mechanic = () => {
    return (
        <div className="col-md-4 text-center">
            <img className="img-fluid mb-3" src={Fredric} alt="" />
            <h4 className="mr-5">Fredric</h4>
            <p className="mr-5"> <FontAwesomeIcon className="text-primary " icon={faPhoneAlt} /> +45-373-934789</p>
        </div>
    );
};

export default Mechanic;