import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar.js';
import MainPage from './components/mainPage.js';
import Footer from './components/footer.js';
import ProductsGroup from './components2/productsGroup.js';
import injectContext from './store/appContext';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/products" component={ProductsGroup} />             
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default injectContext(App);
