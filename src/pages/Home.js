import React from "react";

import HomeIntro from "../components/HomeIntro";
import HomeHighlights from "../components/HomeHighlights";
import HomeNews from "../components/HomeNews";

class Home extends React.Component{
    render(){
        return (
            <body className="home-page-body">
                <main>

                    <div className="top-mover"></div>

                    <HomeIntro/>

                    <HomeHighlights/>

                    <HomeNews/>

                </main>
            </body>
        )
    }
}

export default Home;