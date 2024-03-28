import { Link, NavLink } from "react-router-dom";
import { navLink } from "./NavLink";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { FaShoppingCart } from "react-icons/fa";
// import useCart from "../../Hooks/useCart";

const NavBar = () => {

    const { user, logOut } = useAuth()
    // const { cart } = useCart()

    const HandlelogOut = () => {
        logOut()
            .then(() => { toast.success('Logout Successfully') })
    }

    return (
        <div>
            <div className="navbar fixed z-50 max-w-screen-xl text-white bg-black/50">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu text-[16px] items-center menu-sm gap-5 dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center items-center hidden lg:flex">
                    <ul className="menu text-[16px] gap-5 menu-horizontal px-1">
                        {navLink}
                    </ul>
                    {/* <Link to='/dashboard/cart'>
                        <button className="btn btn-sm ml-3">
                            <FaShoppingCart className='text-xl' />
                            <div className="badge badge-secondary">+{cart?.length}</div>
                        </button>
                    </Link> */}
                </div>
                <div className="navbar-end mr-6 text-[16px]">
                    {
                        user?.email ?
                            <button className='btn btn-outline text-white border-white uppercase' onClick={HandlelogOut}>LogOut</button>
                            :
                            <NavLink
                                to="/login"
                                className={({ isActive, isPending, isTransitioning }) =>
                                    [
                                        isPending ? "pending" : "",
                                        isActive ? "text-yellow-500 underline" : "",
                                        isTransitioning ? "transitioning" : "",
                                    ].join(" ")
                                }
                            >
                                Login
                            </NavLink>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;