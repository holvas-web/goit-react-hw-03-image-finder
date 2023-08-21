// Searchbar.js
import React, { Component } from 'react';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.query);
  };

  handleChange = event => {
    this.setState({ query: event.target.value });
  };

  render() {
    return (
      <header className="Searchbar">
        <form onSubmit={this.handleSubmit} className="SearchForm">
          <button type="submit" className="SearchForm-button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}


// import { Component } from "react";

// export class Searchbar extends Component {
//     state = {
//       query: '',
//     };
  
//     handleSubmit = event => {
//       event.preventDefault();

//       if (this.state.query.trim() === '') {
//         return;
//       }

//       this.props.onSubmit(this.state.query);
//     };

//     handleChange = event => {
//       this.setState({ query: event.target.value });
//     };
  
//     render() {
//       return (
//         <header className="Searchbar">
//           <form onSubmit={this.handleSubmit} className="SearchForm">
//             <button type="submit" className="SearchForm-button">
//               <span className="button-label"></span>
//             </button>
  
//             <input
//               className="SearchForm-input"
//               type="text"
//               autoComplete="off"
//               autoFocus
//               placeholder="Search images and photos"
//               value={this.state.query}
//               onChange={this.handleChange}
//             />
//           </form>
//         </header>
//       );
//     }
//   }