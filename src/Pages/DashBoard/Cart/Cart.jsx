import Swal from "sweetalert2";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useCart from "../../../hooks/useCart";
import { MdOutlineDelete } from "react-icons/md";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";


const Cart = () => {
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total,item) =>total +item.price ,0)
    const axiosSecure = useAxiosSecure();
    const handleDeleteCartItem =id=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            
            axiosSecure.delete(`/carts/${id}`)
            .then(res =>{
                if(res.data.deletedCount > 0){
                    refetch();
                    Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                }
            })
            }
          });

    } 

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
                <Link to='/dashboard/payment'>
                    <button className="btn btn-outline bg-slate-400">Pay Now</button>
                </Link>
                
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
                                {index +1 }
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
                            <button onClick={()=>handleDeleteCartItem(item._id)} className="btn btn-ghost btn-md"><MdOutlineDelete className="text-xl" /></button>
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