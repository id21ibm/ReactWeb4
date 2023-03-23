import React from "react";
import {Link} from 'react-router-dom';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <ul className="footer-menu">
                    <li><a href="menu.html">Meny</a></li>                
                    <li><a href="contact.html">Kontakta Oss</a></li>
                    <li><a href="https://eat.orderhero.se/pizzeriasvalan" rel="noreferrer">Beställ</a></li>
                    <li><a href="https://www.facebook.com/svalanpizza/" rel="norefferer">Facebook</a></li>
                    <Link to="/Credit">Kreditering av bilder/ikoner</Link>            
                </ul>

                <p className="footer-opening-hours"><strong>Öppettider</strong><br />
                Måndag: 10-20<br />
                tisdag: 10-20<br />
                Onsdag: 10-20<br />
                Torsdag 10-20<br />
                Fredag 10-20<br />
                Lördag 11-20<br />
                Söndag: 11-20</p>

                <p className="footer-contact-information"><strong>Kontaktinformation:</strong><br />
                <strong>Adress:</strong> Ringvägen 35, 90421 Umeå<br />
                <strong>Telefon:</strong> 090-14 25 06<br />
                <strong>E-mail:</strong> svalan@svalanpizzeria.se</p>
            </footer>
        );
    }
}

export default Footer;