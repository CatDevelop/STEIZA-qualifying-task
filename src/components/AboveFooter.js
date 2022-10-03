import React from "react";

import 'animate.css';
import Button from "./Button";


export const AboveFooter = () => {
    return (
        <section className="above-footer-container" id="home">
            <div className="above-footer">
                <div className="af-blocks">
                    <div className="af-left">
                        <h1>About US</h1>
                        <p className="about-us">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi semper viverra nunc cursus
                            tortor lectus nunc nulla nibh. Egestas amet consectetur vel vitae aliquam dictum
                            suspendisse. Lobortis eget consequat, tellus et et sed turpis. Pretium quisque vitae, amet,
                            porttitor odio ultricies massa pharetra leo. Et ipsum urna fames
                            in sit mi ultrices nisi, nunc.
                        </p>
                    </div>
                    <div className="af-center">
                        <h1>Categories</h1>
                        <div className="af-categories">
                            <p>watch</p>
                            <p>bracelets</p>
                            <p>belts</p>
                            <p>jewelry</p>
                            <p>cufflinks</p>
                        </div>
                    </div>
                    <div className="af-right">
                        <h1>Mailing</h1>
                        <p className="about-us mailing">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi semper viverra nunc cursus
                            tortor lectus nunc nulla nibh.
                        </p>
                        <div className="mail-form">
                            <div className="mail-input">
                                <div><input className="form-control" placeholder="Your mail"></input></div>
                                <Button header="SUBSCRIBE"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>)
}
