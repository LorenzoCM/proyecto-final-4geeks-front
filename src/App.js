import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar.js';
import MainPage from './views/mainPage.js';
import Newsletter from './components/newsletter.js';
import Footer from './components/footer.js';
import ProductsGroup from './views/productsGroup.js';
<<<<<<< HEAD
import Contact from './views/contact.js';
=======
import ProductDetails from './views/productDetails';
>>>>>>> iñaki
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
      </Switch>
      <Newsletter />
      <Footer />
    </BrowserRouter>
  );
}

export default injectContext(App);
