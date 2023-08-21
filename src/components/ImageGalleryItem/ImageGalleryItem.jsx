// ImageGalleryItem.js
import React from 'react';

export const ImageGalleryItem = ({ src, onClick }) => (
  <li className="ImageGalleryItem">
    <img src={src} alt="" className="ImageGalleryItem-image" onClick={onClick} />
  </li>
);



// // import { Component } from "react";
// import React from "react";

// export const ImageGalleryItem = ({ src, onClick }) => (
//   <li className="ImageGalleryItem">
//     <img src={src} alt="" onClick={onClick} />
//   </li>
// );


// // export class ImageGalleryItem extends Component {
// //     render() {
// //       const { webformatURL, largeImageURL, onClick } = this.props;
// //       return (
// //         <li className="ImageGalleryItem">
// //           <img 
// //             src={webformatURL}
// //             alt=""
// //             onClick={() => onClick(largeImageURL)} 
// //             />
// //         </li>
// //       );
// //     }
// //   }