import React from 'react';
import BookingService from '../BookingService/BookingService';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <section style={{ backgroundColor: '#82d7f8' }}>
            <div className="row container">

                <BookingService />
            </div>
        </section >

    );
};

export default Dashboard;