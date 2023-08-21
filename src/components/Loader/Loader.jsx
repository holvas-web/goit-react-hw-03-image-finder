import React from 'react';
import LoaderSpinner from 'react-loader-spinner';

export const CustomLoader = () => (
  <div className="loader">
    <LoaderSpinner type="ThreeDots" color="#00BFFF" height={80} width={80} />
  </div>
);



// import React from 'react';

// // export class Loader extends Component {
// //     render() {
// //       return (
// //         <div className="loader-container">
// //           <div className="loader"></div>
// //         </div>
// //       );
// //     }
// //   }