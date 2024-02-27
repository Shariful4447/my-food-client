import { NavLink, Outlet } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoHome } from "react-icons/io5";


const DashBoard = () => {
    return (
        <div className="flex">
            {/* dashBoardSidebar */}
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4">
                     <li className="bg-blue-500 text-2xl mb-2">
                        <NavLink to='/dashboard/cart'>
                            <IoHome/>
                            User Home
                        </NavLink>
                    </li>
                    <li className="bg-blue-500 text-2xl mb-2 uppercase">
                        <NavLink to='/dashboard/cart'>
                            <MdOutlineShoppingCart />
                            My Cart
                        </NavLink>
                    </li>
                    <li className="bg-blue-500 text-2xl mb-2 uppercase">
                        <NavLink to='/dashboard/cart'>
                            <MdOutlineShoppingCart />
                            payment
                        </NavLink>
                    </li>
                    <li className="bg-blue-500 text-2xl mb-2 uppercase">
                        <NavLink to='/dashboard/cart'>
                            <MdOutlineShoppingCart />
                            Reservation
                        </NavLink>
                    </li>
                    <li className="bg-blue-500 text-2xl mb-2 uppercase">
                        <NavLink to='/dashboard/cart'>
                            <MdOutlineShoppingCart />
                            add review
                        </NavLink>
                    </li>
                    <li className="bg-blue-500 text-2xl mb-2 uppercase">
                        <NavLink to='/dashboard/cart'>
                            <MdOutlineShoppingCart />
                            my booking
                        </NavLink>
                    </li>

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