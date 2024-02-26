import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";


const FoodCart = ({item}) => {
    const {name, image, price, recipe, _id}=item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const handleAddToCart = ()=>{
        
        if(user && user?.email){
            //send item to the database
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axios.post('http://localhost:8000/carts', cartItem)
            .then(res =>{
                console.log(res.data);
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Item Added Successfully",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            })

        }
        else{
            Swal.fire({
                title: "You are not Logged In",
                text: "Please Login to add Item to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, log In!"
              }).then((result) => {
                if (result.isConfirmed) {
                  //send to the login page
                    navigate('/login', {state: {from: location}})
                }
              });
        }

    }
    return (
        <div className="card w-[424px] bg-base-100 shadow-xl p-3">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="bg-slate-900 absolute right-0 text-white mr-4 mt-4 px-4">${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                
                <div onClick={handleAddToCart} className="card-actions">
                <button className="btn btn-outline bg-slate-200 border-0 border-orange-400 border-b-4">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCart;