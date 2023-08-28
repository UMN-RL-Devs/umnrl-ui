export default function Navbar() {
    return (
        <header>
            <nav className="nav">
                <a href="/" className="site-title">UMNRL</a>
                <ul>
                    <li>
                        <a href="/about">About</a>
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
        </header>
    );
}


