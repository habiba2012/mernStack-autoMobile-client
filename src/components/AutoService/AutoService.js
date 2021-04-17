import React from 'react';
import styled, { keyframes } from 'styled-components';
import { swing } from 'react-animations'
import { useHistory } from 'react-router';
// import '.style.css';

const Swing = styled.div`animation: 2s ${keyframes`${swing}`}infinite`;

const AutoService = (props) => {
    const { id, img, name, description } = props.service;
    const history = useHistory();
    /* history.push(`/dashboard/${id}`) */
    return (
        <Swing>
            <div className="col-md-4 text-center  mb-5 auto-service" onClick={() => history.push('/dashboard')}>
                <img style={{ height: "200px" }} src={img} alt="" />
                <h5 className="mt-3 mb-3">{name}</h5>
                <p className="text-secondary text-justify ">{description}</p>
            </div>
        </Swing>
    );
};

export default AutoService;