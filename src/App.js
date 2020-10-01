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
import Blog from './views/blog.js';
import MyAccount from './views/myAccount.js';
import AdminProductsList from './views/adminProductsList.js';
import Checkout from './views/checkout.js';
import injectContext from './store/appContext';
import AdminUsersList from './views/adminUsersList';
import AddProduct from './views/addProduct';
import EditProduct from './views/editProduct';

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
        {/* This is supposed to receive a username from database <:username> vvv */}
        <Route exact path="/micuenta" component={MyAccount} />               
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/admincoffee/productslist" component={AdminProductsList} />
        <Route exact path="/admincoffee/users" component={AdminUsersList} />
        <Route exact path="/admincoffee/addproduct/" component={AddProduct} />
        <Route exact path="/admincoffee/editproduct/:id" component={EditProduct} />
      </Switch> 
      <Newsletter />
      <Footer />
    </BrowserRouter>
  );
}

export default injectContext(App);
