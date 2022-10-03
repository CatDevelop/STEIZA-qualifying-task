import React from "react";
import Item from "./Item";

import item1 from "../assets/img/item1.png";
import item2 from "../assets/img/item2.png";
import item3 from "../assets/img/item3.png";

export const NewSeasonItems = () => {
    return (
        <section className="new-season-items-container" id="home">
            <div className="new-season-items">
                <h1>Season 2020/21</h1>
                <hr width="120px" size="2px"/>
                <div className="ns-items">
                    <Item image={item1} header="Louis XVI ATHOS" cost="$1 520.00"/>
                    <Item image={item2} header="Louis XVII ATHOS" cost="$1 200.00"/>
                    <Item image={item3} header="Louis XX ATHOS" cost="$1 840.00"/>
                </div>
            </div>
        </section>)
}
