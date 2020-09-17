import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar.js';
import MainPage from './views/mainPage.js';
import Newsletter from './components/newsletter.js';
import Footer from './components/footer.js';
import ProductsGroup from './views/productsGroup.js';
import Contact from './views/contact.js';
import ProductDetails from './views/productDetails';
import Cart from './views/cart';
import Login from './views/login';
import Register from './views/register';
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
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch> 
      <Newsletter />
      <Footer />
    </BrowserRouter>
  );
}

export default injectContext(App);
