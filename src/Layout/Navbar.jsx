import { NavLink } from "react-router-dom";
import logo from '../assets/Images/logo.png';

const Navbar = () => {
    const navLinks =
        <>

            <li className="mr-4 text-xl  font-medium "><NavLink className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active bg-amber-500 underline" : ""
            } to="/">Home</NavLink></li>
            <li className="mr-4 text-xl  font-medium "><NavLink className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active bg-amber-500 underline" : ""
            } to="/service">Service</NavLink></li>
            <li className="mr-4 text-xl  font-medium "><NavLink className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active bg-amber-500 underline" : ""
            } to="/gallery">Gallery</NavLink></li>
            <li className="mr-4 text-xl  font-medium "><NavLink className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active bg-amber-500 underline" : ""
            } to="/venue">Venue</NavLink></li>
            <li className="mr-4 text-xl  font-medium "><NavLink className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active bg-amber-500 underline" : ""
            } to="/booking">Booking</NavLink></li>
            <li className="mr-4 text-xl  font-medium "><NavLink className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active bg-amber-500 underline" : ""
            } to="/login">Login</NavLink></li>


        </>
    return (
        <div className="navbar justify-between  bg-amber-600">


            <div>
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <div className=" lg:ml-0 md:ml-[450px] ml-[250px]">
                    <button><img className="md:w-[260px] md:h-[80px] w-[180px] h-[60px] rounded-xl shadow-lg" src={logo} alt="" /></button>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>

        </div>
    );
};

export default Navbar;