import React from 'react';

export const ImageGalleryItem = ({ src, onClick }) => (
  <li className="ImageGalleryItem">
    <img src={src} alt="" onClick={onClick} />
  </li>
);