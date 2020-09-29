import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Navbar = () => {
    const { store, actions } = useContext(Context);
    const [totalCart, setTotalCart] = useState(0);
    // useEffect(() => {
    //     setTotalCart(store.cart.reduce((total, a) => { return total + a.quantity }, 0))
    //     console.log(totalCart)
    // }, [store.cart, totalCart]);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark c-black navbar-collapse py-5 d-flex flex-column">
            <div className="d-flex justify-content-between align-items-baseline w-100">
                <div className="d-flex justify-content-start">
                    <button className="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="d-flex flex-column align-items-center">
                    <Link to="/" className="text-white d-flex flex-column align-items-center"><i className="fas fa-mug-hot mb-1"></i><h6>CLI Coffee Club</h6></Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mr-auto">
                            <li className="nav-item active ml-4">
                                <Link to="/" className="nav-link text-white">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link to="/products" className="nav-link text-white">Tienda</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link to="/blog" className="nav-link text-white">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link text-white">Contacto</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="d-flex flex-column align-items-end">
                    <div>
                        <button className="btn border-0 text-white" type="button"><i className="fas fa-search"></i></button>
                        <Link to="/cart" className="btn border-0 text-white" type="submit"><i className="fas fa-shopping-cart"> {store.quantity}</i></Link>
                    </div>
                    <div className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Login
                                </a>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                            <Link to="/login" className="dropdown-item" href="#">Login</Link>
                            <a className="dropdown-item" href="#">Logout</a>
                            <div className="dropdown-divider"></div>
                            <Link to="/register" className="dropdown-item" href="#">Register</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;