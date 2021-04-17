import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../../App';
import PaymentProcessing from '../PaymentProcess/PaymentProcessing';
import Sidebar from '../Sidebar/Sidebar';

const BookingService = () => {
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
            service: data.service,
            address: data.address,
            phone: data.phone,
        }
        fetch('http://localhost:5500/addBooking', {
            method: 'POST',
            body: JSON.stringify(bookingData),
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then((res) => console.log("server side response", res));
        history.push('/myBooking')
    };

    useEffect(() => {
        fetch(`http://localhost:5500/service`)
            .then((res) => res.json())
            .then((data) => setServiceData(data));
    }, []);

    return (
        <div className="row">
            <div className="col-md-5">
                <Sidebar />
            </div>

            <div className="col-md-7 pt-5 mt-5 col-md-offset-4 container mb-5">
                <h2 className="title text-primary">Booking</h2>
                <h5 className="title text-primary">Your Booking id {serviceData._id}</h5>
                <h5 id="heading2" className="text-danger">Payment Method</h5>

                <div className="radio-group d-flex">
                    <div className='radio' data-value="credit"><img src="https://i.imgur.com/28akQFX.jpg" alt="" width="200px" height="60px" /></div>
                    <div className='radio ml-3' data-value="paypal"><img src="https://i.imgur.com/5QFsx7K.jpg" alt="" width="200px" height="60px" /></div> <br />
                </div>
                <div className="card-details">
                    <h5 className="title">Credit Card Details</h5>

                    <PaymentProcessing />
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-group" >
                        <input type="text" name="name" id="name" defaultValue={loggedInUser.name} {...register("name", { required: true })} placeholder="Your Name" className="form-control" />
                        {errors.name && <span className="error">Name is required</span>}
                    </div>
                    <div className="form-group">
                        <input type="text" name="email" id="email" defaultValue={loggedInUser.email} {...register("email", { required: true })} placeholder="Your Email" className="form-control" />
                        {errors.email && <span className="error">Email is required</span>}
                    </div>

                    <div className="form-group">
                        <input type="text" name="service" id="service" defaultValue={serviceData.name} {...register("cost", { required: true })} placeholder="Your Email" className="form-control" />
                        {errors.email && <span className="error">Service Name is required</span>}
                    </div>

                    <div className="form-group">
                        <input type="text" name="address" id="address" {...register("address", { required: true })} placeholder="Your Address" className="form-control" />
                        {errors.address && <span className="error">Address is required</span>}
                    </div>
                    <div className="form-group">
                        <input type="text" id="phone" name="phone"{...register("phone", { required: true })} placeholder="Your Phone Number" className="form-control" />
                        {errors.phone && <span className="error">Phone Number is required</span>}
                    </div>



                    {/* <div className="row">

                            <div className="form-group col-sm-8">
                                <label for="">Expiration Date</label>
                                <div className="input-group expiration-date">
                                    <input type="text" name="date" {...register("date", { required: true })} className="form-control" placeholder="MM" aria-label="MM" />
                                    <span className="date-separator">/</span>
                                    <input type="text" className="form-control" placeholder="YY" aria-label="YY" />
                                </div>
                            </div>
                            <div className="form-group col-sm-8">
                                <label for="card-number">Card Number</label>
                                <input id="card-number" name="number" {...register("number", { required: true })} type="text" className="form-control" placeholder="Card Number" aria-label="Card Holder" />
                            </div>
                            <div className="form-group col-sm-4">
                                <label for="cvc">CVC</label>
                                <input id="cvc" type="text" name="cvc"  {...register("cvc", { required: true })} className="form-control" placeholder="CVC" aria-label="Card Holder" />
                            </div> */}
                    <div className="form-group col-sm-12 d-flex">

                        <h6 className="title mr-5 p-3">Your Service charge will be ${serviceData.cost}</h6>
                        <button type="button" onClick={() => alert("Booking Successful.")} className="btn-sm btn-danger ">Proceed</button>
                    </div>


                </form>

            </div>

        </div >
    );
};

export default BookingService;