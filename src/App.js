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
import BlogSpot from './views/blogspot.js';
import MyAccount from './views/myAccount.js';
import AdminProductsList from './views/adminProductsList.js';
import Checkout from './views/checkout.js';
import injectContext from './store/appContext';
import AddProduct from './views/addProduct';
import Blog from './views/blog';
import EditProduct from './views/editProduct';
import Success from './views/success';
import PayError from './views/error';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/products" component={ProductsGroup} />
        {/* This is supposed to receive a product id from database <:id> vvv */}
        <Route exact path="/products/:index" component={ProductDetails} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/blogspot" component={BlogSpot} />
        {/* This is supposed to receive a username from database <:username> vvv */}
        <Route exact path="/micuenta" component={MyAccount} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/admincoffee/productslist" component={AdminProductsList} />
        <Route exact path="/admincoffee/addproduct/" component={AddProduct} />
        <Route exact path="/admincoffee/editproduct/" component={EditProduct} />
        <Route exact path="/success" component={Success} />
        <Route exact path="/error" component={PayError} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default injectContext(App);
