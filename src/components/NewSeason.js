import React from "react";
import new_season_background from "../assets/img/new-season-background.png";
import {NewSeasonItems} from "./NewSeasonItems";

export const NewSeason = () => {
    return (
        <section className="new-season-container" id="season">
            <div className="new-season">
                <div className="new-season-first">
                    <NewSeasonItems/>
                </div>
                <div className="new-season-second">
                    <div className="ns-image-back">
                        <img src={new_season_background} alt="I'm new-season"/>
                    </div>
                </div>
            </div>
        </section>)
}
