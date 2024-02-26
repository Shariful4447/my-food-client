import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import useCart from "../../../hooks/useCart";



const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);
    const [cart] = useCart();

    const handleLogOut = () => {
        logOut()
        .then(() => {

        })
        .catch(error => console.log(error))
    }
    const navOptions = <>
        <li><Link to='/'>HOME</Link></li>
        <li><a href="">CONTACT US</a></li>
        <li><Link to='/menu'>OUR MENU</Link></li>
        <li><Link to='/shop/salad'>OUR SHOP</Link></li>
        <li><Link to='/secret'>SECRET THINGS</Link></li>
        <li className="-mt-2">
        <Link to='/'>
                <button className="btn btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-white h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    <div className="badge badge-secondary">+{cart.length}</div>
                </button>
                
            </Link>
        </li>
        
    </>
    return (
        <div>
            <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-2xl bg-black text-white">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        
                        {navOptions}
                        
                    </ul>
                    <div className="-mt-2">
                            {
                                user ? <> 
                                        <Link>
                                            <button onClick={handleLogOut} className="btn btn-outline btn-success">Log Out</button>
                                        </Link>
                                 </> :<>
                                        <Link to='/login'>
                                            <button className="btn btn-outline btn-success">Log In</button>
                                        </Link>
                                 </>
                            }
                            
                            
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;