import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Navbar = () => {
    const { store, actions } = useContext(Context);
    const [totalCart, setTotalCart] = useState(0);
    let user = JSON.parse(sessionStorage.getItem("currentUser"));
    let cartNumItems = JSON.parse(localStorage.getItem("quantityCart"));

    return (
        <nav className="navbar navbar-expand-lg navbar-dark c-black navbar-collapse">
            <div className="d-flex justify-content-center align-items-center w-100">
                <div className="d-flex justify-content-start">
                    <button className="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <Link to="/" className="text-white d-flex align-items-baseline">
                    <i class="fas fa-coffee fa-2x"></i>
                    <h6>4Geeks Coffee Club</h6>
                </Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item active ml-4">
                            <Link to="/" className="nav-link text-white">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link to="/products" className="nav-link text-white">Tienda</Link>
                        </li>
                        <li className="nav-item dropdown mx-3">
                            <Link to="/blog" className="nav-link dropdown-toggle text-white" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Blog
                                </Link>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="/blog#sobrecafe">Sobre el café</Link>
                                <Link className="dropdown-item" to="/blog#coffeebrewing">Coffee Brewing Guides</Link>
                                <Link className="dropdown-item" to="/blog#maquinas">Acerca de las máquinas de café</Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link text-white">Contacto</Link>
                        </li>
                    </ul>
                </div>
                <div className="d-flex flex-column align-items-end">
                    <div>
                        <button className="btn border-0 text-white" type="button"><i className="fas fa-search"></i></button>
                        <Link to="/cart" className="btn border-0 text-white" type="submit"><i className="fas fa-shopping-cart"> {cartNumItems}</i></Link>
                    </div>
                    <div className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {!!user ? user.user.name : "Login"}
                        </a>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                            <Link to={!!user ? "/micuenta" : "/login"} className="dropdown-item">{!!user ? "Mi Cuenta" : "Login"}</Link>
                            <Link to="/" className="dropdown-item" onClick={actions.logout}>Logout</Link>
                            <div className={!!user ? "d-none" : "dropdown-divider"}></div>
                            <Link to="/register" className={!!user ? "d-none" : "dropdown-item"} href="#">Register</Link>

                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;