// ImageGallery.js
import React from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, onImageClick }) => (
  <ul className="ImageGallery">
    {images.map(({ id, webformatURL }) => (
      <ImageGalleryItem key={id} src={webformatURL} onClick={() => onImageClick(id)} />
    ))}
  </ul>
);



// // import { Component } from "react";
// import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";

// export const ImageGallery = ({images, onImageClick }) => (
//   <ul className="gallery">
//     {images.map(({ id, webformatURL }) => (
//       <ImageGalleryItem key={id} src={webformatURL} onClick={() => onImageClick(id)} />
//     ))}
//   </ul>
// );


// // export class ImageGallery extends Component {
// //     render() {
// //       return <ul className="ImageGallery">{this.props.children}</ul>;
// //     }
// //   }