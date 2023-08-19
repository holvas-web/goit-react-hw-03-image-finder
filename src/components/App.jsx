import React, { Component } from 'react';
// import './App.css';
import axios from 'axios';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Button } from  '../Button/Button';
import { Loader } from  '../Loader/Loader';
import { Modal } from '../Modal/Modal';

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

  render() {
    const { images, isLoading, showModal, largeImageURL } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <ImageGallery>
          {images.map(image => (
            <ImageGalleryItem
              key={image.id}
              webformatURL={image.webformatURL}
              onClick={() => this.toggleModal(image.largeImageURL)}
            />
          ))}
        </ImageGallery>
        {isLoading && <Loader />}
        {images.length > 0 && !isLoading && (
          <Button onClick={this.fetchImages} />
        )}
        {showModal && (
          <Modal
            largeImageURL={largeImageURL}
            onClose={this.toggleModal}
          />
        )}
      </div>
    );
  };
};