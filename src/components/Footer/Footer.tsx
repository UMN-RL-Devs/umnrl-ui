import {Outlet, Link } from "react-router-dom";

export const Footer = () => {
    return (
        <footer>
            <div className="ftr">
                <Link to="/contact">Contact Us</Link>
            </div>

            <Outlet />
        </footer>
    )
}