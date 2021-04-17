import React from 'react';
import Mechanic from '../Mechanic/Mechanic';
const Mechanics = () => {
    return (
        <section className="mechanics">
            <div className="container">
                <h4 className="text-center text-default mb-5">Our Skilled <span className="text-danger">Mechanics</span></h4>
                <div className="row">
                    <Mechanic />
                    <Mechanic />
                    <Mechanic />
                </div>
            </div>
        </section>
    );
};

export default Mechanics;