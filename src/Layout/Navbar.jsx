import { Link, NavLink } from "react-router-dom";
import logo from '../assets/Images/logo.png';
import AuthHook from "../CustomHook/AuthHook";
import toast from "react-hot-toast";

const Navbar = () => {

    const { user, signOutUser } = AuthHook()
    const navLinks =
        <>

            <li className="mr-4 text-xl  font-medium "><NavLink className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active bg-amber-500 underline" : ""
            } to="/">Home</NavLink></li>
            <li className="mr-4 text-xl  font-medium "><NavLink className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active bg-amber-500 underline" : ""
            } to="/gallery">Gallery</NavLink></li>
            <li className="mr-4 text-xl  font-medium "><NavLink className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active bg-amber-500 underline" : ""
            } to="/blog">Blog</NavLink></li>
            <li className="mr-4 text-xl  font-medium "><NavLink className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active bg-amber-500 underline" : ""
            } to="/booking">Booking</NavLink></li>
            <li className="mr-4 text-xl  font-medium "><NavLink className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active bg-amber-500 underline" : ""
            } to="/about">About Us</NavLink></li>
        </>

        const handleSignOUt = () => {
            signOutUser()
            .then(()=> {
                toast.success('Sign Out Succesfull')
            })
            .catch((error)=> {
                toast.error(error)
            })
        }
    return (
        <div className="navbar bg-amber-600">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <div className="pl-10">
                    <button><img className="md:w-[260px] md:h-[80px] w-[180px] h-[60px] rounded-xl shadow-lg" src={logo} alt="" /></button>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {user ? <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={user.photoURL} />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                       
                        <li className="text-xl font-medium px-1">{user.displayName}</li>
                        <li><button className="text-xl" onClick={handleSignOUt}>Logout</button></li>
                    </ul>
                </div> : <Link to="/login"><button className="btn bg-amber-400 font-bold"> Login</button></Link>}
            </div>
        </div>
    );
};

export default Navbar;