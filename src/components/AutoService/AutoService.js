import React from 'react';

const AutoService = (props) => {
    return (
        <div className="col-md-4 text-center  mb-5">
            <img style={{ height: "200px" }} src={props.service.img} alt="" />
            <h5 className="mt-3 mb-3">{props.service.name}hi</h5>
            <p className="text-secondary text-justify ">{props.service.description}</p>
        </div>
    );
};

export default AutoService;