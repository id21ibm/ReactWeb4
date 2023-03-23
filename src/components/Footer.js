import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <ul className="footer-menu">
                    <li><a href="menu.html">Meny</a></li>                
                    <li><a href="contact.html">Kontakta Oss</a></li>
                    <li><a href="https://eat.orderhero.se/pizzeriasvalan" target="_blank" rel="noopener noreferrer">Beställ</a></li>
                    <li><a href="https://www.facebook.com/svalanpizza/" target="_blank" rel="noopener norefferer">Facebook</a></li>
                    <li><a href="credits-page.html">Kreditering av bilder/ikoner</a></li>            
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