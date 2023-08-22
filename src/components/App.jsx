import React, { Component } from 'react';
import axios from 'axios';
// import { createPortal } from 'react-dom';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { CustomLoader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

const API_KEY = '38934998-3e855f71d85cefaf04a1d7456';
const BASE_URL = 'https://pixabay.com/api/';
const PER_PAGE = 12;

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: false,
    showModal: false,
    largeImageURL: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.fetchImages();
    }
  }

  fetchImages = () => {
    const { query, page } = this.state;

    this.setState({ isLoading: true });

    axios
      .get(
        `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`
      )
      .then(response => {
        this.setState(prevState => ({
          images: [...prevState.images, ...response.data.hits],
          page: prevState.page + 1,
        }));
      })
      .finally(() => this.setState({ isLoading: false }));
  };

  handleSearchSubmit = query => {
    this.setState({ query, images: [], page: 1 });
  };

  toggleModal = (largeImageURL = '') => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
      largeImageURL,
    }));
  };

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.toggleModal();
    }
  };

  handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      this.toggleModal();
    }
  };

  render() {
    const { images, isLoading, showModal, largeImageURL } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <ImageGallery images={images} onImageClick={this.toggleModal} />
        {isLoading && <CustomLoader />}
        {images.length > 0 && !isLoading && <Button onClick={this.fetchImages}>Load More</Button>}
        {showModal && (
          <Modal onClose={this.toggleModal} largeImageURL={largeImageURL}>
            <img src={largeImageURL} alt="" />
          </Modal>
        )}
      </div>
    );
  }
}
