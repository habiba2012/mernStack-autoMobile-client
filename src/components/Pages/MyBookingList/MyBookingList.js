import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../../App";

const Order = () => {
    const [myBookingList, setMyBookingList] = useState({});
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch(
            "https://automobile-servicing.herokuapp.com/booking?email=" + loggedInUser.email
        )
            .then((res) => res.json())
            .then((data) => setMyBookingList(data));
    }, []);

    console.log(myBookingList);

    const selectedBookings = Object.values(myBookingList);
    console.log(selectedBookings);
    return (
        <>
            <div class="card-container">
                <h4 className="mb-2 text-center">
                    <span className="text-primary">{loggedInUser.name}</span> place{" "}
                    {myBookingList.length} booking here.
            </h4>
                <h5 className="mb-5 text-center">
                    <strong>Email Address:</strong>
                    {loggedInUser.email}
                </h5>
            </div>


        </>
    );
};

export default Order;
