import { Component } from "react";

export class Button extends Component {
    render() {
      return (
        <button className="load-more-button" onClick={this.props.onClick}>
          Load more
        </button>
      );
    }
  }