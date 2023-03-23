import {Component} from "react";
class HomeIntro extends Component{
    render(){
        return(
            <section>
                <div className="intro">
                    <h2 className="about-pizzeria" id="about-us">Om oss</h2>
                    <p>Vi är fast beslutna om att bara göra riktiga pizzor. På riktiga råvaror som är särskilt utvalda av Maestro. Alla våra ingredienser är färska. Alla våra såser är dessutom gjorda av oss själva på Svalan. Vi köper in färskt kött och kryddar det helt själva för att uppnå den bästa kundupplevelsen. En av våra populäraste beställningar är våra kebabrätter. Vi använder oss av en kebabgrill för att få kebaben perfekt dessutom är all vårt bröd hembakat. Och det är tack vare detta arbete som kunderna kommer tillbaks om och om igen. På Svalan Pizzeria får du en pizza på bara färska råvaror. Vi ställer stora krav på oss själva för att ni skall få ett så bra resultat som möjligt! Välkomna till oss för en smakupplevelse som håller vad vi lovar.</p>
                </div>
            </section>
        );
    }

}


export default HomeIntro;