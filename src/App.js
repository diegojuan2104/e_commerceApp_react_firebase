import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/home/homepage.component';
import ShopPage from './pages/shop/shop.component';

const HatsPage = () => (
  <div>
    <h1>
        HATS PAGE
    </h1>
  </div>
);

function App() {
  return (
    <div >
        <Route exact path='/' component={ HomePage }></Route>
        <Route exact path='/shop' component={ ShopPage }></Route>
        <Route exact path='/shop/hats' component={ HatsPage }></Route>
    </div>
  );
}

export default App;
