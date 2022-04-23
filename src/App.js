import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Navbar from './Components/Navbar'
import Categories from './Components/Categories'
import Home from './Pages/Home'
import Product from './Pages/Product';
import Error from './Pages/Error';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product/:product' element={<Product />} />
            <Route path='/product/all' element={<Home />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

