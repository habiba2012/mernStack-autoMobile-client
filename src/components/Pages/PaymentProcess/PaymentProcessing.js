import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentCardForm from './paymentCardForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51Ie1znJ9bCnilAKwEL1tPkJrgYW8PZPiKxoHhzrRsOP59G5sRYn5VTyEwbY2NbXB1oMXDxGdQylI7fuhnJ90D7Hy007o6eM0Sn');

const PaymentProcessing = ({ handlePayment }) => {

    return (
        <Elements stripe={stripePromise}>
            <PaymentCardForm handlePayment={handlePayment}></PaymentCardForm>
        </Elements>
    );
};
export default PaymentProcessing;