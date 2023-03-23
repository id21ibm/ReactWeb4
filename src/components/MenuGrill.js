import {Component} from "react";
class MenuGrill extends Component{
    render(){
            return(
                <table className="menu-table">
                    <tr className="individual-row">
                        <td className="item-number">77</td>
                        <td className="item-information"><span className="item-information-name">Hamburgare </span>90g, bröd</td>
                        <td className="item-price">69:-</td>
                    </tr>
                    <tr className="individual-row">
                        <td className="item-number">78</td>
                        <td className="item-information"><span className="item-information-name">Cheeseburgare </span>90g, med bröd</td>
                        <td className="item-price">79:-</td>
                    </tr>
                    <tr className="individual-row">
                        <td className="item-number">79</td>
                        <td className="item-information"><span className="item-information-name">Miniskrovmål </span>33cl dricka ingår</td>
                        <td className="item-price">75:-</td>
                    </tr>
                    <tr className="individual-row">
                        <td className="item-number">80</td>
                        <td className="item-information"><span className="item-information-name">Skrovmål </span>33cl dricka ingår</td>
                        <td className="item-price">112:-</td>
                    </tr>
                    <tr className="individual-row">
                        <td className="item-number">81</td>
                        <td className="item-information"><span className="item-information-name">Superskrovmål </span>50cl dricka ingår</td>
                        <td className="item-price">125:-</td>
                    </tr>
                    <tr className="individual-row">
                        <td className="item-number">82</td>
                        <td className="item-information"><span className="item-information-name">Pommestallrik </span>strips och hamburgerdressing</td>
                        <td className="item-price">69:-</td>
                    </tr>  
                </table>
            )
    }
}

export default MenuGrill;