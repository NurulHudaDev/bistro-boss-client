import { NavLink, Outlet } from "react-router-dom";
import { FaAd, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart } from "react-icons/fa";
import UseCart from "../hooks/useCart";


const Dashboard = () => {

    const [cart] = UseCart();

    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-600">
                <ul className="menu"> 
                    <li><NavLink to="/dashboard/userHome"><FaHome /> User Home</NavLink></li>
                    <li><NavLink to="/dashboard/reservaation"><FaCalendar /> Reservation</NavLink></li>
                    <li><NavLink to="/dashboard/cart"><FaShoppingCart /> My Cart ({cart.length})</NavLink></li>
                    <li><NavLink to="/dashboard/review"><FaAd /> Add a Review</NavLink></li>
                    <li><NavLink to="/dashboard/bookings"><FaList /> My Bookings</NavLink></li>
                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome /> Home</NavLink></li>
                    <li><NavLink to="/order/salad"><FaSearch /> Menu</NavLink></li>
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;