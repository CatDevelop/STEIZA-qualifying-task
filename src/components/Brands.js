import React from "react";
import brandLogo1 from "../assets/img/brandlogo1.png";

export const Brands = () => {
    return (
        <section className="brands-container" id="home">
            <div className="brands">
                <h1>Our Brands</h1>
                <hr width="120px" size="2px"/>
                <div className="logos">
                    <img src={brandLogo1} alt="I'm brand1"/>
                    <img src={brandLogo1} alt="I'm brand2"/>
                    <img src={brandLogo1} alt="I'm brand3"/>
                    <img src={brandLogo1} alt="I'm brand4"/>
                </div>
            </div>
        </section>)
}
