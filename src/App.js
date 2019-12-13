import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import ScrollToTop from './component/ScrollToTop';
import {BrowserRouter as Router} from 'react-router-dom';
import PageProgress from 'react-page-progress';
// import Loader from 'react-loader-spinner';
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

import './App.css';

function App() {
 
  return (
    <div className="App">
      <div id="wrapper" className="home-page">
      <Router>
        <ScrollToTop/>
        <PageProgress color={'skyblue'} height={5}/>
        <Header />
        <Footer />
      </Router>
      </div>
    </div>
  );
}

export default App;
