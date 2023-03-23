import React from "react";

class Video extends React.Component{
    render() {
        return(
            <main>
                <div class="top-mover"></div>
                <iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/2b2gJu-g3qE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </main>
       )
    }
}

export default Video;