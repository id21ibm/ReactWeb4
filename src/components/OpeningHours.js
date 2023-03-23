import {Component} from "react";
class OpeningHours extends Component{
    render(){
            return(
                <div className="opening-hours">
                    <h2>Öppettider</h2>
                    <p>Måndag: 10-20<br />
                        tisdag: 10-20<br />
                        Onsdag: 10-20<br />
                        Torsdag 10-20<br />
                        Fredag 10-20<br />
                        Lördag 11-20<br />
                        Söndag: 11-20</p>
                    <h2>Telefonnummer</h2>
                    <p>090-14 25 06<br /></p>
                </div>
    );
    }

}


export default OpeningHours;