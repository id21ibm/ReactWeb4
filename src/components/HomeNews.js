import React from "react";



import advertisementPicture from "./../images/svalan-restaurant-by-bearsm53.jpg";
import deliveryPicture from "./../images/Delivery-picture-by-Rodnae-Productions.jpg";
import pizzaAthena from "./../images/Pizza-cooking-by-Athena.jpg";

class HomeNews extends React.Component {
    render() {
        return (
            <section className="slideshow-section">
                        <h2 className="news-section-title">Nyheter</h2>
                        <div className="slideshow-container">
                            <div className="mySlides fade" id="first-slide">
                                <div className="numbertext">1 / 3</div>
                                <img src={advertisementPicture} alt="pizzeria Interior" style={{width: '100%'}} />
                                <div className="text">Jan 20 2023: Renovering i lokalen färdig!!!</div>                    
                            </div>
                            <div className="mySlides fade">
                                <div className="numbertext">2 / 3</div>
                                <img src={deliveryPicture} alt="Delivery service" style={{width: '100%'}} />
                                <div className="text">Dec 03 2022: Nu kan du beställa hemkört med Foodora</div>                    
                            </div>
                            <div className="mySlides fade">
                                <div className="numbertext">3 / 3</div>
                                <img src={pizzaAthena} alt="Pizza" style={{width: '100%'}} />
                                <div className="text">Nyhet i menyn: Capricciosa</div>                    
                            </div>
                        </div>
                    </section>
        );
    }
}

export default HomeNews;