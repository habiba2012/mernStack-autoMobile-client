import React from 'react';
import styled, { keyframes } from 'styled-components';
import { swing } from 'react-animations'
import { useHistory } from 'react-router';
// import '.style.css';

const Swing = styled.div`animation: 2s ${keyframes`${swing}`}infinite`;

const AutoService = (props) => {
    const { _id, imageURL, name, description, cost } = props.service;
    const history = useHistory();

    const handleBooking = (id) => {
        history.push(`/addBooking/${id}`);
    }

    return (
        <>
            <div className="col-md-4 text-center  mb-5" id="autoService" onClick={() => handleBooking(_id)}>
                <img style={{ height: "200px" }} src={imageURL} alt="" />
                <h5 className="mt-3 mb-3">{name}</h5><p>Service Charge ${cost}</p>
                <p className="text-secondary text-justify">{description}</p>
            </div>
        </>
    );
};

export default AutoService;