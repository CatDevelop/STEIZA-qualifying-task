import React from "react";

import 'animate.css';
import BorderedFrame from "./BorderedFrame";
import first_screen_logo from "../assets/img/first-screen-logo.png";


export const FirstScreen = () => {
    return (
        <section className="first-screen-container" id="home">
            <div className="first-screen">
                <div className="first-screen-logo">
                    <img src={first_screen_logo} alt="I'm first-screen"/>
                </div>

                <BorderedFrame
                    text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rhoncus tellus a " +
                        "pharetra sodales. Phasellus aliquam rhoncus ex nec tempus. Nulla eros magna, maximus vel est eu, " +
                        "pharetra lobortis ante. Quisque est sem, congue non nulla eu, cursus pellentesque orci. Aenean a " +
                        "urna semper, posuere purus viverra, luctus mi. Proin dolor augue, ullamcorper sit amet nulla ac, " +
                        "porta interdum leo. Sed at felis non nulla bibendum iaculis eu ac quam. Maecenas libero justo, " +
                        "molestie at sapien nec, pulvinar volutpat."}/>
            </div>
        </section>)
}
