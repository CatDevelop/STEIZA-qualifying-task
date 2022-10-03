import React, {Component} from "react";

// this.props.header - заголовок блока
export default class Button extends Component {
    render() {
        return (
            <div className="but">
                <h3 className="header">
                    {this.props.header}
                </h3>
            </div>
        );
    }
}