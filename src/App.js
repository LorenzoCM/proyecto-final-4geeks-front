import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar.js';
import MainPage from './views/mainPage.js';
import Newsletter from './components/newsletter.js';
import Footer from './components/footer.js';
import ProductsGroup from './views/productsGroup.js';
import Contact from './views/contact.js';
import injectContext from './store/appContext';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/products" component={ProductsGroup} />
        {/* Aquí va la sección de Iñaki                      */}
        {/* Iñaki2 */}
        {/* Aqui va la sección de Ceci */}
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Newsletter />
      <Footer />
    </BrowserRouter>
  );
}

export default injectContext(App);
