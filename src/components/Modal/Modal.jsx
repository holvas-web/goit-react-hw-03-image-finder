// Modal.js
import React, { Component } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

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

  handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className="Overlay" onClick={this.handleOverlayClick}>
        <div className="Modal">
          <img src={this.props.largeImageURL} alt="" />
        </div>
      </div>,
      modalRoot
    );
  }
}



// import React, { Component } from 'react';

// import { createPortal } from 'react-dom';

// const modalRoot = document.querySelector('#modal-root');

// export class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }

//   handleKeyDown = event => {
//     if (event.code === 'Escape') {
//       this.props.onClose();
//     }
//   };

//   handleOverlayClick = event => {
//     if (event.target === event.currentTarget) {
//       this.props.onClose();
//     }
//   };

//   render() {
//     return createPortal(
//       <div className="overlay" onClick={this.handleOverlayClick}>
//         <div className="modal">
//           <img src={this.props.largeImageURL} alt="" />
//         </div>
//       </div>,
//       modalRoot
//     );
//   }
// }

// // export class Modal extends Component {
// //     componentDidMount() {
// //       window.addEventListener('keydown', this.handleKeyDown);
// //     }
  
// //     componentWillUnmount() {
// //       window.removeEventListener('keydown', this.handleKeyDown);
// //     }
  
// //     handleKeyDown = event => {
// //       if (event.code === 'Escape') {
// //         this.props.onClose();
// //       }
// //     };
  
// //     render() {
// //       return (
// //         <div className="Overlay" onClick={this.props.onClose}>
// //           <div className="Modal">
// //             <img src={this.props.largeImageURL} alt="" />
// //           </div>
// //         </div>
// //       );
// //     }
// //   }
  