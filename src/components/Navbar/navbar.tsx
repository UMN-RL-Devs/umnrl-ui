import {Outlet, Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <header>
            <nav className="nav">
                <Link to="/">UMNRL</Link>
                <ul>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <a href="https://discord.gg/bAe9fQFX" rel="noopener">Discord</a>
                    </li>
                    <li>
                        <a href="https://twitter.com/esportsumn" rel="noopener">Twitter</a>
                    </li>
                    <li>
                        <a href="https://www.twitch.tv/gopheresports" rel="noopener">Twitch</a>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </header>
    );
}


