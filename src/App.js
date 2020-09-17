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
import Blog from './views/blog.js';
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
        <Route exact path="/blog" component={Blog} />
        {/* This is supposed to receive a username from database <:username> vvv */}
        <Route exact path="/username" component={MyAccount} />               
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
