import React, { useEffect, useState } from 'react';
import BookingService from '../BookingService/BookingService';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    const [admins, setAdmins] = useState([])
    useEffect(() => {
        fetch('https://automobile-servicing.herokuapp.com/admin')
            .then(res => res.json())
            .then(data => setAdmins(data))
    })
    return (
        <section style={{ backgroundColor: '#82d7f8' }}>
            <div>

                <BookingService />
                {admins.map(admin => <Sidebar admin={admin}></Sidebar>)}
            </div>
        </section >

    );
};

export default Dashboard;