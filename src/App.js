import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Address from './component/profile/Address';
import FullName from './component/profile/FullName';
import ProfilePhotos from './component/profile/ProfilePhotos';
import Header from './component/header/Header';
import Footer from './component/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="item">
       <FullName/>
      <ProfilePhotos/>
      <Address/>
      </div>
      <br/>
      <Footer/>
    </div>
  );
}

export default App;
