import React from "react";
import 'animate.css';
import other_collection_background from "../assets/img/other-collection-background.png";
import BorderedFrame from "./BorderedFrame";
import Button from "./Button";

export const OtherCollection = () => {
    return (
        <section className="other-collection-container" id="season">
            <div className="other-collection">
                <div className="other-collection-first">
                    <div className="os-image-back">
                        <img src={other_collection_background} alt="I'm other collection"/>
                    </div>
                </div>
                <div className="other-collection-second">
                    <h1>Collection 2018</h1>
                    <hr width="120px" size="2px"/>
                    <div className="oc-border">
                        <BorderedFrame text="In hac habitasse platea dictumst. Phasellus faucibus sem sit amet est dictum,
                        ut finibus metus feugiat. Quisque sodales eget enim ac maximus. Nam ultrices leo a ex malesuada
                        aliquam. Pellentesque nec tempor leo. Cras molestie nec orci vel cursus. Praesent varius nisi et
                        vehicula venenatis. Suspendisse ultricies mauris vulputate ligula ultricies dignissim. Phasellus ac
                        dignissim dui. Nulla accumsan sem in rutrum sodales."/>
                    </div>
                    <Button header="view the collection"/>
                </div>
            </div>
        </section>)
}
