import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const BookingService = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [booking, setBooking] = useState(null);
    const history = useHistory();
    const email = loggedInUser.email;
    const name = loggedInUser.name;


    const onSubmit = data => {
        const bookingData = {
            name,
            email,



        }
        fetch(`http://localhost:5500/addBooking`, {
            method: 'POST',
            body: JSON.stringify(bookingData),
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(() => success => {
                if (success) {
                    alert('Booking done.')

                }
            })

    };


    return (
        <div className="">
            <div className="col-md-5">
                <Sidebar />
            </div>

            <div className="col-md-7 pt-5 mt-5 col-md-offset-4 container mb-5">
                <h2>Booking</h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group" >
                        <input type="text" name="name" defaultValue={loggedInUser.name} {...register("name", { required: true })} placeholder="Your Name" className="form-control" />
                        {errors.name && <span className="error">Name is required</span>}
                    </div>
                    <div className="form-group">
                        <input type="text" name="email" defaultValue={loggedInUser.email} {...register("email", { required: true })} placeholder="Your Email" className="form-control" />
                        {errors.email && <span className="error">Email is required</span>}
                    </div>
                    <div className="form-group">
                        <input type="text" name="address" {...register("address", { required: true })} placeholder="Your Address" className="form-control" />
                        {errors.address && <span className="error">Address is required</span>}
                    </div>
                    <div className="form-group">
                        <input type="text" name="phone"{...register("phone", { required: true })} placeholder="Your Phone Number" className="form-control" />
                        {errors.phone && <span className="error">Phone Number is required</span>}
                    </div>
                    <h4 id="heading2" className="text-danger">Payment Method</h4>
                    <div className="radio-group d-flex">
                        <div className='radio' data-value="credit"><img src="https://i.imgur.com/28akQFX.jpg" alt="" width="200px" height="60px" /></div>
                        <div className='radio ml-3' data-value="paypal"><img src="https://i.imgur.com/5QFsx7K.jpg" alt="" width="200px" height="60px" /></div> <br />
                    </div>
                    <div className="card-details">

                        <h4 className="title">Credit Card Details</h4>
                        <div className="row">

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
                            </div>
                            <div className="form-group col-sm-12 d-flex">
                                <h6 className="title mr-5 p-3">Your Service charge will be $1000.</h6>
                                <button type="button" className="btn-sm btn-danger ">Proceed</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default BookingService;