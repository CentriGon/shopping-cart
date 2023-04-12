import React, {useState, useEffect} from 'react';
import NavBar from './components/NavBar';
import {Link} from 'react-router-dom';
import Shop from './Shop';

function App(props) {

  return (
    <div className="App">
      <p> welcome to walmart </p>
      <Link to="/shop" element={<Shop/>}> Weed</Link>
    </div>
  );
}

export default App;
