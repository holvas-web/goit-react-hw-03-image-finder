import React from 'react';

export const ImageGalleryItem = ({ src, onClick }) => (
  <li className="gallery-item">
    <img src={src} alt="" onClick={onClick} />
  </li>
);