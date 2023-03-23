import React from "react";
import{NavLink} from "react-router-dom";

import homeIcon from "./../images/home-icon-by-ardi.png";
import menuIcon from "./../images/menu-icon-by-icelloid.png";
import contactIcon from "./../images/contact-icon-by-kyle-dodson.png";
import orderIcon from "./../images/external-icon-by-nesan-PIllay.png";

class Header extends React.Component {
    render() {
        return (

            <header>
                <h1 className="logo">Svalan Pizzeria</h1>
                <input type="checkbox" id="nav-toggle" className="nav-toggle" />
                <nav>
                    <ul>
                        <li><NavLink to="">Hem<img src={homeIcon}  alt="Hem-ikon" className="navigation-icon" /></NavLink></li>
                        <li><NavLink to="menu">Meny<img src={menuIcon} alt="Meny-ikon" className="navigation-icon" /></NavLink></li>
                        <li><NavLink to="contact">Kontakta Oss<img src={contactIcon} alt="Kontakt-ikon" className="navigation-icon" /></NavLink></li>
                    <li><a href="https://eat.orderhero.se/pizzeriasvalan" target="-blank" rel="noopener noreferrer">Beställ<img src={orderIcon} alt="Extern hemsida-ikon" className="navigation-icon" /></a></li>
                    </ul>
                </nav>
                <label for="nav-toggle" className="nav-toggle-label">
                    <span></span>
                </label>
            </header>

        );
    }
}

export default Header;