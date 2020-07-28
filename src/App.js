import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/home/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sing-in-sign-up/sign-in-sign-up.component'

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
      <Header></Header>
      <Switch>
        <Route exact path='/' component={ HomePage }></Route>
        <Route exact path='/shop' component={ ShopPage }></Route>
        <Route exact path='/signin' component={ SignInAndSignUp }></Route>
        <Route exact path='/shop/hats' component={ HatsPage }></Route>
      </Switch>
    </div>
  );
}

export default App;
