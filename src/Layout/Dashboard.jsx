import { NavLink, Outlet } from "react-router-dom";
import { FaAd, FaCalendar, FaHome, FaList, FaShoppingCart } from "react-icons/fa";


const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-600">
                <ul className="menu"> 
                    <li><NavLink to="/dashboard/userHome"><FaHome /> User Home</NavLink></li>
                    <li><NavLink to="/dashboard/reservaation"><FaCalendar /> Reservation</NavLink></li>
                    <li><NavLink to="/dashboard/cart"><FaShoppingCart /> My Cart</NavLink></li>
                    <li><NavLink to="/dashboard/review"><FaAd /> Add a Review</NavLink></li>
                    <li><NavLink to="/dashboard/bookings"><FaList /> My Bookings</NavLink></li>
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;