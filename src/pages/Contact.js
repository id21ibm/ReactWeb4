import React from "react";

import OpeningHours from "../components/OpeningHours";
import ContactForm from "../components/ContactForm";

import mapPicture from "./../images/map-by-Google-Maps.jpg";

class Contact extends React.Component{
    render() {
        return(
            <main>
                <body className="contact-page-body">
                    <div className="top-mover"></div>

                        <section className="contact-start">
                            <h2 className="contact-title">Kom i kontakt</h2>
                            <div className="contact-cards">
                            <OpeningHours/>

                                <div className="map">
                                    <h2>Hitta hit</h2>
                                    <p>adress: Ringvägen 35<br />Håll musen över kartan för att förstora</p>
                                    <img src={mapPicture} alt="Map of restaurant location" className="map-image" onmouseover="enlargeImage(this)" onmouseout="normalSizeImage(this)" />
                                </div>  
                            </div>
                        
                        </section>
                <ContactForm/>
                </body>
                
            </main>
            
        )
    }
}

export default Contact;