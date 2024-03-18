import { NavLink, Outlet } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";


const DashBoard = () => {
    const [cart] = useCart();
    //toddo : get is admin value from database
    const [isAdmin] = useAdmin();
    
    return (
        <div className="flex">
            {/* dashBoardSidebar */}
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4">
                     {
                        isAdmin ? 
                        <>
                            <li className="bg-blue-500 text-2xl mb-2">
                                <NavLink to='/dashboard/adminHome'>
                                    <IoHome/>
                                    Admin Home
                                </NavLink>
                            </li>
                            <li className="bg-blue-500 text-2xl mb-2 uppercase">
                                <NavLink to='/dashboard/addItems'>
                                    <MdOutlineShoppingCart />
                                    Add Items
                                </NavLink>
                            </li>
                            <li className="bg-blue-500 text-2xl mb-2 uppercase">
                                <NavLink to='/dashboard/manageItems'>
                                    <MdOutlineShoppingCart />
                                    Manage Items
                                </NavLink>
                            </li>
                            <li className="bg-blue-500 text-2xl mb-2 uppercase">
                                <NavLink to='/dashboard/manageBookings'>
                                    <MdOutlineShoppingCart />
                                    Manage Bookings
                                </NavLink>
                            </li>
                            <li className="bg-blue-500 text-2xl mb-2 uppercase">
                                <NavLink to='/dashboard/users'>
                                    <MdOutlineShoppingCart />
                                    All Users
                                </NavLink>
                            </li>

                        </> 
                        : 
                        <>
                            <li className="bg-blue-500 text-2xl mb-2">
                                <NavLink to='/dashboard/userHome'>
                                    <IoHome/>
                                    User Home
                                </NavLink>
                            </li>
                            <li className="bg-blue-500 text-2xl mb-2 uppercase">
                                <NavLink to='/dashboard/cart'>
                                    <MdOutlineShoppingCart />
                                    My Cart({cart.length})
                                </NavLink>
                            </li>
                            <li className="bg-blue-500 text-2xl mb-2 uppercase">
                                <NavLink to='/dashboard/payment'>
                                    <MdOutlineShoppingCart />
                                    payment
                                </NavLink>
                            </li>
                            <li className="bg-blue-500 text-2xl mb-2 uppercase">
                                <NavLink to='/dashboard/paymentHistory'>
                                    <MdOutlineShoppingCart />
                                    Payment History
                                </NavLink>
                            </li>
                            <li className="bg-blue-500 text-2xl mb-2 uppercase">
                                <NavLink to='/dashboard/cart'>
                                    <MdOutlineShoppingCart />
                                    add review
                                </NavLink>
                            </li>
                            <li className="bg-blue-500 text-2xl mb-2 uppercase">
                                <NavLink to='/dashboard/booking'>
                                    <MdOutlineShoppingCart />
                                    Book a Table
                                </NavLink>
                            </li>
                            <li className="bg-blue-500 text-2xl mb-2 uppercase">
                                <NavLink to='/dashboard/bookingHistory'>
                                    <MdOutlineShoppingCart />
                                    Booking History
                                </NavLink>
                            </li>
                        </>
                     }

                    <div className="divider"></div>
                    <li className="bg-blue-500 text-2xl mb-2 uppercase">
                        <NavLink to='/'>
                            <MdOutlineShoppingCart />
                            home
                        </NavLink>
                    </li>
                    <li className="bg-blue-500 text-2xl mb-2 uppercase">
                        <NavLink to='/menu'>
                            <MdOutlineShoppingCart />
                            menu
                        </NavLink>
                    </li>
                    <li className="bg-blue-500 text-2xl mb-2 uppercase">
                        <NavLink to='/shop/salad'>
                            <MdOutlineShoppingCart />
                            shop
                        </NavLink>
                    </li>
                    <li className="bg-blue-500 text-2xl mb-2 uppercase">
                        <NavLink to='/dashboard/cart'>
                            <MdOutlineShoppingCart />
                            contact
                        </NavLink>
                    </li>
                </ul>
            </div>
            {/* dashBoard mainBody */}
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;