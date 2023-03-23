import React from "react";

import MenuPizza from "../components/MenuPizza";
import MenuGrill from "../components/MenuGrill";

class Menu extends React.Component{
    render() {
        return(
            <body className="menu-page-body">
                <div className="menu-div">
                    <h2 className="menu-title">PIZZA</h2>
                    <p className="menu-additional-info">Tomatsås och ost ingår i alla pizzor. Vi använder äkta kokt skinka och färska råvaror.<br />
                                                    Familjepizza: 3 gånger pizzans ordinarie pris plus 15:-</p>
                    <MenuPizza/>
                
                    <h2 className="menu-title">GRILL</h2>
                    <MenuGrill/>
                </div>
            </body>
            
        )
    }
}

export default Menu;