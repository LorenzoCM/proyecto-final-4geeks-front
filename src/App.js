import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar.js';
import MainPage from './views/mainPage.js';
import Footer from './components/footer.js';
import ProductsGroup from './views/productsGroup.js';
import ProductDetails from './views/productDetails';
import injectContext from './store/appContext';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/products" component={ProductsGroup} />
        {/* This is supposed to receive a product id from database <:id> vvv */}
        <Route exact path="/products/id" component={ProductDetails} />
        {/* Aqui va la sección de Ceci */}
        {/* Aqui va la sección de Lorenzo */}
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default injectContext(App);
