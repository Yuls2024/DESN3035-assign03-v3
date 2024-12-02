export default function Header() {

    return <>
        <header>
            <div className="logo">
                <img src="images/couple-dancing.png" alt="Couple Dancing Logo" />
                <h1>DANCING WORLD</h1>
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
                    <li><a href="./">Catalog</a></li>
                    <li><a href="about">About</a></li>
                    <li><a href="contact">Contact</a></li>
                </ul>
            </nav>
            <div id="dropdown_menu" className="dropdown_menu">
                <ul>
                    <li><a href="./">Catalog</a></li>
                    <li><a href="about">About</a></li>
                    <li><a href="contact">Contact</a></li>
                </ul>
            </div>
        </header>

    </>

}