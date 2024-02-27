import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useCart from "../../../hooks/useCart";


const Cart = () => {
    const [cart] = useCart();
    const totalPrice = cart.reduce((total,item) =>total +item.price ,0)

    return (
        <div>
            <SectionTitle
            heading='want to add more'
            subHeading='my cart'
            >
                
            </SectionTitle>
            <div className="flex gap-5 m-5 justify-evenly">
                
                <h2 className="text-4xl">Total Item : {cart.length}</h2>
                <h2 className="text-4xl"> Total Price: {totalPrice} </h2>
                <button className="btn btn-outline">Pay Now</button>
                
            </div>
        </div>
    );
};

export default Cart;