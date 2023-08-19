import React, { Component } from 'react';

export class Modal extends Component {
    componentDidMount() {
      window.addEventListener('keydown', this.handleKeyDown);
    }
  
    componentWillUnmount() {
      window.removeEventListener('keydown', this.handleKeyDown);
    }
  
    handleKeyDown = event => {
      if (event.code === 'Escape') {
        this.props.onClose();
      }
    };
  
    render() {
      return (
        <div className="Overlay" onClick={this.props.onClose}>
          <div className="Modal">
            <img src={this.props.largeImageURL} alt="" />
          </div>
        </div>
      );
    }
  }
  