export default function Header() {

    return <>
        <header>
            <div className="logo">
                <img src="images/logo01.png" alt="Couple Dancing Logo" />
                <h1>FLORAL ESSENCE</h1>
            </div>
            <div>
                <a href="#dropdown_menu">
                    <img
                        className="hamburger"
                        src="images/hamburger-icon.png"
                        alt="Hamburger Icon"
                    />
                </a>
            </div>
            <nav>
                <ul className="navLinks">
                    <li><a href="./">Portfolio</a></li>
                    <li><a href="about">About</a></li>
                    <li><a href="contact">Contact</a></li>
                </ul>
            </nav>
            <div id="dropdown_menu" className="dropdown_menu">
                <ul>
                    <li><a href="./">Portfolio</a></li>
                    <li><a href="about">About</a></li>
                    <li><a href="contact">Contact</a></li>
                </ul>
            </div>
        </header>

    </>

}