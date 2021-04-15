import React from 'react';
import Mechanic from '../Mechanic/Mechanic';
const Mechanics = () => {
    return (
        <section className="mechanics">
            <div className="container">
                <h5 className="text-center  text-primary mb-5">Our Mechanics</h5>
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