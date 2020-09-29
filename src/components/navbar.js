import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Navbar = () => {
    const { store, actions } = useContext(Context);
    const [totalCart, setTotalCart] = useState(0); 
    let user = JSON.parse(sessionStorage.getItem("currentUser"));
    let cartNumItems = JSON.parse(localStorage.getItem("quantityCart"));
    

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark navbar-collapse">
            <a className="navbar-brand text-white" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto mr-auto">
                    <li className="nav-item active ml-4">
                        <Link to="/" className="nav-link text-white" href="#">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item mx-3">
                        <Link to="/products" className="nav-link text-white" href="#">Tienda</Link>
                    </li>
                    <li className="nav-item mx-3">
                        <Link to="/blog" className="nav-link text-white" href="#">Blog</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link text-white" href="#">Contacto</Link>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0 mr-3 ml-2" type="button">Search</button>
                    <Link to="/cart" className="btn btn-outline-primary my-2 my-sm-0 mr-3 ml-2" type="submit"><i className="fas fa-shopping-cart"> {cartNumItems}</i></Link>
                    <div className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {!!user ? user.user.name : "Login"} 
                        </a>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">                      
                            <Link to="/login" className="dropdown-item" href="#">Login</Link>
                            <a className="dropdown-item" href="#" onClick={actions.logout}>Logout</a>
                            <div className="dropdown-divider"></div>
                            <Link to="/register" className="dropdown-item" href="#">Register</Link>
                            
                        </div>
                    </div>
                </form>
            </div>
        </nav>
    );
};

export default Navbar;