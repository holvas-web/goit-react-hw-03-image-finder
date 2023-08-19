import { Component } from "react";

export class ImageGalleryItem extends Component {
    render() {
      const { webformatURL, largeImageURL, onClick } = this.props;
      return (
        <li className="ImageGalleryItem">
          <img 
            src={webformatURL}
            alt=""
            onClick={() => onClick(largeImageURL)} 
            />
        </li>
      );
    }
  }