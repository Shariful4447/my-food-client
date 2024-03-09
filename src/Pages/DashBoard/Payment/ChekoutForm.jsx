import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";



const ChekoutForm = () => {
    const [error, setError] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const handleSubmit = async (event) => {
        event.preventDefault();
        if(!stripe || !elements){
            return
        }
        const card = elements.getElement(CardElement);
        if(card ===null){
            return;
        }
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card

        })
        if(error){
            console.log('payment method error', error);
            setError(error.message);
        }
        else{
            console.log(paymentMethod);
            setError('');
        }

    }
    return (
        <form onSubmit={handleSubmit} className="m-5">
            <CardElement
                options={{
                style: {
                    base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': {
                        color: '#aab7c4',
                    },
                    },
                    invalid: {
                    color: '#9e2146',
                    },
                },
                }}
            />
            <button className="btn btn-outline p-5 m-2" type="submit" disabled={!stripe}>
                Pay
            </button>
            <p className="text-red-500 text-xl">{error}</p>
        </form>
    );
};

export default ChekoutForm;