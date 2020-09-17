import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar.js';
import MainPage from './views/mainPage.js';
import Newsletter from './components/newsletter.js';
import Footer from './components/footer.js';
import ProductsGroup from './views/productsGroup.js';
import Contact from './views/contact.js';
import ProductDetails from './views/productDetails';
import injectContext from './store/appContext';
import MyAccount from './views/myAccount.js';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/products" component={ProductsGroup} />
        {/* This is supposed to receive a product id from database <:id> vvv */}
        <Route exact path="/products/id" component={ProductDetails} />
        {/* This is supposed to receive a username from database <:username> vvv */}
        <Route exact path="/username" component={MyAccount} />
        {/* Aqui va la sección de Ceci */}
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Newsletter />
      <Footer />
    </BrowserRouter>
  );
}

export default injectContext(App);
