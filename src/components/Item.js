import React, {Component} from "react";

// this.props.header - заголовок блока
// this.props.cost - текст блока
// this.props.image - текст блока
export default class Item extends Component {
    render() {
        return (
            <div className="item">
                <img src={this.props.image} alt="I'm first-item"/>
                <p className="ns-item-name">{this.props.header}</p>
                <p className="ns-item-cost">{this.props.cost}</p>
            </div>
        );
    }
}
