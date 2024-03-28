import { NavLink } from "react-router-dom";
import { navLink } from "./NavLink";

const NavBar = () => {
    return (
        <div>
            <div className="navbar fixed z-50 max-w-screen-xl text-white bg-black/50">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu text-[16px] menu-sm gap-5 dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu text-[16px] gap-5 menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end mr-6 text-[16px]">
                    <NavLink
                        to="/login"
                        className={({ isActive, isPending, isTransitioning }) =>
                            [
                                isPending ? "pending" : "",
                                isActive ? "text-yellow-500 " : "",
                                isTransitioning ? "transitioning" : "",
                            ].join(" ")
                        }
                    >
                        Login
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default NavBar;