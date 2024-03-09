import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import ChekoutForm from "./ChekoutForm";

// to do: add publishable key to stripe
const stripePromise = loadStripe(import.meta.env.VITE_STRPE_KEY);
const Payment = () => {
    return (
        <div>
            <SectionTitle
            heading='payment'
            subHeading='Please Enter Payment'
            ></SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
                    <ChekoutForm></ChekoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;