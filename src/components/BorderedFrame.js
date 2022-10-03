import React, {Component} from "react";

// this.props.text - текст блока
export default class BorderedFrame extends Component {
    render() {
        return (
            <div className="BorderedFrame">
                <p>
                    {this.props.text}
                </p>
            </div>
        );
    }
}