import React from 'react';
import BookingService from '../BookingService/BookingService';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <section className="bg-info">
            <div className="row container">
                <div className="col-md-5">
                    <Sidebar />
                </div>
                <div className="col-md-7 pt-5 mt-5">
                    <BookingService />
                </div>
            </div>
        </section >

    );
};

export default Dashboard;