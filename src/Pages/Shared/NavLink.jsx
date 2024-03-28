import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

export const navLink = <>
    <NavLink
        to="/"
        className={({ isActive, isPending, isTransitioning }) =>
            [
                isPending ? "pending" : "",
                isActive ? "text-yellow-500" : "",
                isTransitioning ? "transitioning" : "",
            ].join(" ")
        }
    >
        Home
    </NavLink>
    <NavLink
        to="/menu"
        className={({ isActive, isPending, isTransitioning }) =>
            [
                isPending ? "pending" : "",
                isActive ? "text-yellow-500" : "",
                isTransitioning ? "transitioning" : "",
            ].join(" ")
        }
    >
        Our Menu
    </NavLink>
    <NavLink
        to="/order/salad"
        className={({ isActive, isPending, isTransitioning }) =>
            [
                isPending ? "pending" : "",
                isActive ? "text-yellow-500" : "",
                isTransitioning ? "transitioning" : "",
            ].join(" ")
        }
    >
        Order Food
    </NavLink>
    <Link to='/dashboard/cart'>
                    <button className="btn btn-sm ml-3">
                        <FaShoppingCart className='text-xl' />
                        <div className="badge badge-secondary">+</div>
                    </button>
                </Link>

</>