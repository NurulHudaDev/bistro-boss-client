import { NavLink, Outlet } from "react-router-dom";
import { FaAd, FaBook, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaVoicemail } from "react-icons/fa";
import UseCart from "../hooks/useCart";
import { MdEmail } from "react-icons/md";
import { FaUtensils } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";


const Dashboard = () => {

    const [cart] = UseCart();

    const isAdmin = true;

    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-600">
                <ul className="menu">
                    {
                        isAdmin ? <>
                            <li><NavLink to="/dashboard/adminHome"><FaHome /> Admin Home</NavLink></li>
                            <li><NavLink to="/dashboard/addItems"><FaUtensils /> Add Items</NavLink></li>
                            <li><NavLink to="/dashboard/manageItems"><FaListUl /> Manage Items</NavLink></li>
                            <li><NavLink to="/dashboard/bookings"><FaBook/> Manage Bookings</NavLink></li>
                            <li><NavLink to="/dashboard/users"><FaUsers /> All Users</NavLink></li>
                        </>
                            :
                            <>
                                <li><NavLink to="/dashboard/userHome"><FaHome /> User Home</NavLink></li>
                                <li><NavLink to="/dashboard/reservaation"><FaCalendar /> Reservation</NavLink></li>
                                <li><NavLink to="/dashboard/cart"><FaShoppingCart /> My Cart ({cart.length})</NavLink></li>
                                <li><NavLink to="/dashboard/review"><FaAd /> Add a Review</NavLink></li>
                                <li><NavLink to="/dashboard/bookings"><FaList /> My Bookings</NavLink></li>
                            </>
                    }
                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome /> Home</NavLink></li>
                    <li><NavLink to="/order/salad"><FaSearch /> Menu</NavLink></li>
                    <li><NavLink to="/order/contact"><MdEmail /> Contact</NavLink></li>
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;