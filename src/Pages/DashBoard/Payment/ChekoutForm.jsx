import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";




const ChekoutForm = () => {
    const [error, setError] = useState('');
    const[clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const {user} = useAuth();
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    useEffect(() => {
        if(totalPrice > 0){
            axiosSecure.post('/create-payment-intent', {price: totalPrice})
            .then(res => {
                console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret);
            })
        }
    },[axiosSecure, totalPrice])
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
        // confirm payment
        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email ||'anonymous',
                    name: user?.displayName || 'anonymous'

                }
            }
        })
        if(confirmError){
            console.log('confirm error');
        }
        else{
            console.log('payment intent', paymentIntent);
            if(paymentIntent.status === 'succeeded' ){
                setTransactionId(paymentIntent.id);

                // now save the payment information to database
                const payment = {
                    email: user?.email,
                    price: totalPrice,
                    transactionId: paymentIntent.id,
                    date: new Date(), //date converter to utc
                    cartId: cart.map(item => item._id),
                    menuItemId: cart.map(item => item.menuId),
                    status:'panding'
                }
                const res = await axiosSecure.post('/payments', payment)
                console.log(res);
                refetch();
                if(res.data.paymentResult.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Payment Complete",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }

             
            }
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
            <button className="btn btn-outline p-5 m-2" type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
            <p className="text-red-500 text-xl">{error}</p>
            {transactionId && <p className="text-green-500"> your transction id : {transactionId}</p>}
        </form>
    );
};

export default ChekoutForm;