import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem'

export const ImageGallery = ({ images, onImageClick }) => (
  <ul className="gallery">
    {images.map(({ id, webformatURL }) => (
      <ImageGalleryItem key={id} src={webformatURL} onClick={() => onImageClick(id)} />
    ))}
  </ul>
);