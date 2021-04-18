import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../../App';
import PaymentProcessing from '../PaymentProcess/PaymentProcessing';
import Sidebar from '../Sidebar/Sidebar';

const BookingService = ({ service }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [booking, setBooking] = useState(null);
    const [serviceData, setServiceData] = useState([])
    const { id } = useParams();
    const history = useHistory();
    const email = loggedInUser.email;
    const name = loggedInUser.name;


    const onSubmit = data => {
        const bookingData = {
            name,
            email,
            address: data.address,
            phone: data.phone,
            service: data.service,


        }
        console.log(data)
        fetch('https://automobile-servicing.herokuapp.com/addBooking', {
            method: 'POST',
            body: JSON.stringify(bookingData),
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then((res) => console.log("server side response", res));
    };

    useEffect(() => {
        fetch(`https://automobile-servicing.herokuapp.com/service`)
            .then((res) => res.json())
            .then((data) => setServiceData(data));
    }, []);

    return (
        <div className="row">
            <div className="col-md-5">
                <Sidebar />
            </div>
            <div className="col-md-7">
                <h2 className="title p-3">Booking</h2>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-group" >
                        <input type="text" id="name" defaultValue={loggedInUser.name} {...register("name", { required: false })} placeholder="Your Name" className="form-control" />
                        {errors.name && <span className="error">Name is required</span>}
                    </div>
                    <div className="form-group">
                        <input type="text" id="email" defaultValue={loggedInUser.email} {...register("email", { required: false })} placeholder="Your Email" className="form-control" />
                        {errors.email && <span className="error">Email is required</span>}
                    </div>

                    <div className="form-group">
                        <input type="text" id="address" {...register("address", { required: true })} placeholder="Your Address" className="form-control" />
                        {errors.address && <span className="error">Address is required</span>}
                    </div>
                    <div className="form-group">
                        <input type="text" id="phone" {...register("phone", { required: true })} placeholder="Your Phone Number" className="form-control" />
                        {errors.phone && <span className="error">Phone Number is required</span>}
                    </div>
                    <div className="form-group">
                        <input type="text" id="service" {...register("service", { required: true })} placeholder="service name" className="form-control" />
                        {errors.service && <span className="error">service Name is required</span>}
                    </div>
                    <div className="form-group">
                        <input type="text" id="status" {...register("status", { required: true })} placeholder="Status" className="form-control" />
                        {errors.status && <span className="error">status is required</span>}
                    </div>

                    <div className="form-group col-sm-12 d-flex">
                        <h6 className="title mr-5 p-3">Your Service charge will be ${serviceData.cost}</h6>
                        <input type="submit" value="submit" className="btn-sm btn-danger " />
                    </div>


                </form>
                <div >
                    <h5 id="heading2" className="text-danger">Payment Method</h5>

                    <div className="radio-group d-flex">
                        <div className='radio' data-value="credit"><img src="https://i.imgur.com/28akQFX.jpg" alt="" width="200px" height="60px" /></div>
                        <div className='radio ml-3' data-value="paypal"><img src="https://i.imgur.com/5QFsx7K.jpg" alt="" width="200px" height="60px" /></div> <br />
                    </div>
                    <div className="card-details">
                        <h5 className="title">Credit Card Details</h5>

                        <PaymentProcessing />
                    </div>
                </div>
            </div>



        </div>
    );
};

export default BookingService;