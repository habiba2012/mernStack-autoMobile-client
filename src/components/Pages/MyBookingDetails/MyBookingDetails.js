import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../../App";
import Sidebar from "../Sidebar/Sidebar";

const MyBookingDetails = () => {
    const [myBooking, setMyBooking] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch(
            "https://automobile-servicing.herokuapp.com/booking?email=" + loggedInUser.email
        )
            .then((res) => res.json())
            .then((data) => setMyBooking(data));
    }, []);

    console.log(myBooking);

    const selectedList = Object.values(myBooking);
    console.log(selectedList);
    return (
        <div className="row">
            <div className="col-md-5">
                <Sidebar />
            </div>
            <div className="col-md-7 bg-light">
                <div className="container">
                    <h4 className="mb-2 text-center">
                        <span style={{ color: "blue" }}>{loggedInUser.email}</span> have{" "}
                        {myBooking.length} bookings here.
      </h4>
                    <h5 className="mb-5 text-center">
                        <strong>Email Address:</strong>
                        {loggedInUser.email}
                    </h5>
                    <table className="table table-borderless">
                        <thead>
                            <tr>
                                <th className="text-secondary text-left" scope="col">Sr No</th>
                                <th className="text-secondary" scope="col">Name</th>
                                <th className="text-secondary" scope="col">Email ID</th>
                                <th className="text-secondary" scope="col">Service</th>
                                <th className="text-secondary" scope="col">Pay with</th>
                                <th className="text-secondary" scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myBooking.map((booking, index) =>

                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{booking.name}</td>
                                        <td>{booking.email}</td>
                                        <td>{booking.service}</td>
                                        <td>Card</td>
                                        <td>pending</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyBookingDetails;
