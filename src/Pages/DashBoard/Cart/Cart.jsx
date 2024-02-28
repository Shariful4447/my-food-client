import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useCart from "../../../hooks/useCart";
import { MdOutlineDelete } from "react-icons/md";


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
                <button className="btn btn-outline bg-slate-400">Pay Now</button>
                
            </div>
            <div className="overflow-x-auto border rounded-xl border-radius-2">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr className="bg-slate-200">
                        <th>
                        <label>
                            <input type="checkbox" className="checkbox" />
                        </label>
                        </th>
                        <th>ITEM IMAGE</th>
                        <th>ITEM NAME</th>
                        <th>PRICE</th>
                        <th>ACTION</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    {
                        cart.map((item, index)=> <tr key={item._id}>
                            <th>
                            <label>
                                {index}
                            </label>
                            </th>
                            <td>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                
                            </div>
                            </td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <th>
                            <button className="btn btn-ghost btn-md"><MdOutlineDelete className="text-xl" /></button>
                            </th>
                        </tr>)
                    }
                    </tbody>
                    
                    
                </table>
            </div>
        </div>
    );
};

export default Cart;