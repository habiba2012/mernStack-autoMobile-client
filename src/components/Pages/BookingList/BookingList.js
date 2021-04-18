import React, { useEffect, useState } from 'react';
import BookingDataTable from '../BookingDataTable/BookingDataTable';
import Sidebar from '../Sidebar/Sidebar';

const BookingList = () => {
    const [bookingList, setBookingList] = useState([]);

    useEffect(() => {
        fetch('https://automobile-servicing.herokuapp.com/booking')
            .then(res => res.json())
            .then(data => setBookingList(data))
    }, [])

    return (
        <div className="container-fluid row" >
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">All Bookings</h5>
                <BookingDataTable bookingList={bookingList} />
            </div>
        </div>
    );
};

export default BookingList;