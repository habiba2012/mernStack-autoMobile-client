import React from 'react';

const BookingDataTable = ({ bookingList }) => {
    return (
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
                    bookingList.map((booking, index) =>

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
    );
};

export default BookingDataTable;