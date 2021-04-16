import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { UserContext } from '../../../App';

const BookingService = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [booking, setBooking] = useState(null);
    const history = useHistory();
    const email = loggedInUser.email;
    const name = loggedInUser.name;

    const handleBooking = data => {
        const bookingData = {
            name,
            email

        }
        fetch(`http://localhost:5200/addBooking`, {
            method: 'POST',
            body: JSON.stringify(bookingData),
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(() => history.push('/myBooking'))

    };


    return (
        <div>
            <h2>Booking</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div style={{ display: booking ? 'none' : 'block' }}>
                    <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Your Name" />
                    {errors.name && <span className="error">Name is required</span>}

                    <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Your Email" />
                    {errors.email && <span className="error">Email is required</span>}

                    <input name="address" ref={register({ required: true })} placeholder="Your Address" />
                    {errors.address && <span className="error">Address is required</span>}

                    <input name="phone" ref={register({ required: true })} placeholder="Your Phone Number" />
                    {errors.phone && <span className="error">Phone Number is required</span>}

                </div>
                <h4 id="heading2" className="text-danger">Payment Method</h4>
                <div className="radio-group d-flex">
                    <div className='radio' data-value="credit"><img src="https://i.imgur.com/28akQFX.jpg" alt="" width="200px" height="60px" /></div>
                    <div className='radio' data-value="paypal"><img src="https://i.imgur.com/5QFsx7K.jpg" alt="" width="200px" height="60px" /></div> <br />
                </div>
                <div className="card-details">

                    <h4 className="title">Credit Card Details</h4>
                    <div className="row">
                        <div className="form-group col-sm-7">
                            <label for="card-holder">Card Holder</label>
                            <input id="card-holder" type="text" className="form-control" placeholder="Card Holder" aria-label="Card Holder" aria-describedby="basic-addon1" />
                        </div>
                        <div className="form-group col-sm-5">
                            <label for="">Expiration Date</label>
                            <div className="input-group expiration-date">
                                <input type="text" className="form-control" placeholder="MM" aria-label="MM" aria-describedby="basic-addon1" />
                                <span className="date-separator">/</span>
                                <input type="text" className="form-control" placeholder="YY" aria-label="YY" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        <div className="form-group col-sm-8">
                            <label for="card-number">Card Number</label>
                            <input id="card-number" type="text" className="form-control" placeholder="Card Number" aria-label="Card Holder" aria-describedby="basic-addon1" />
                        </div>
                        <div className="form-group col-sm-4">
                            <label for="cvc">CVC</label>
                            <input id="cvc" type="text" className="form-control" placeholder="CVC" aria-label="Card Holder" aria-describedby="basic-addon1" />
                        </div>
                        <div className="form-group col-sm-12">
                            <button type="button" onClick={() => handleBooking(data)} className="btn btn-primary btn-block">Proceed</button>
                        </div>
                    </div>
                </div>
            </form>

        </div>
    );
};

export default BookingService;