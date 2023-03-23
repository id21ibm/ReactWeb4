import {Component} from "react";
import LikeButton from "./LikeButton";

import {Link} from 'react-router-dom';

import advertisementPicture from "./../images/svalan-restaurant-by-bearsm53.jpg";
import PizzaPictureByMuffinCreatives from "./../images/Pizza-picture-by-Muffin-Creatives.jpg";
import deliveryPicture from "./../images/Delivery-picture-by-Rodnae-Productions.jpg";

class HomeHighlights extends Component{
    render(){
        return(
            <section className="three-highlights">
                    <h2 className="th-title"> Ytterligare information</h2>    
                <div className="infoboxes">
                    <div className="infobox">
                        <img src={advertisementPicture} alt="Restaurant-advertisement" className="info-image" />
                        <h3>Reklamfilm</h3>
                        <p>Kolla in våran reklamfilm som vi spelade in tidigare i år.</p>
                        <Link to="/video">Kolla här <br/><br/></Link>
                        <LikeButton/>
                    </div>
                    <div className="infobox">
                        <img src={deliveryPicture} alt="Delivery" className="info-image" />                  
                        <h3>Hemleverans</h3>
                        <p>Vi erbjuder hemleverans, både via våran verksamhet och delivery-appar så som Wolt och Foodora.</p>
                        <LikeButton/>
                       
                    </div>
                    <div className="infobox">
                        <img src={PizzaPictureByMuffinCreatives} alt="Pizza" className="info-image" />
                        <h3>Information om allergi</h3>
                        <p>Om du har några allergiska besvär, tveka inte om att höra av dig!</p>
                        <LikeButton/>
                    </div>
                </div>
            </section>
        );
    }

}


export default HomeHighlights;