import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Navbar = () => {
    const { store, actions } = useContext(Context);
    const [totalCart, setTotalCart] = useState(0);
    let user = JSON.parse(sessionStorage.getItem("currentUser"));
    let cartNumItems = JSON.parse(localStorage.getItem("quantityCart"));

    return (
        <nav className="navbar navbar-expand-lg navbar-dark c-black container-fluid px-3">
            <div className="d-flex justify-content-between align-items-center row no-gutters w-100">
                <Link to="/" className="col-6 col-lg-4 text-white d-flex align-items-baseline order-1">
<<<<<<< HEAD
                    <i class="fas fa-coffee fa-2x"></i>
=======
                    <i className="fas fa-coffee fa-2x"></i>
>>>>>>> lorenzo
                    <h6>4Geeks Coffee Club</h6>
                </Link>
                <div className="col-6 col-lg-4 d-flex flex-column align-items-end order-2 order-lg-3">
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
                <div className="col-12 col-lg-4 order-3 order-lg-2 w-100">
                    <hr className="mr-0 d-lg-none border-white w-100"/>
                    <ul className="navbar-nav d-flex flex-row justify-content-between align-items-baseline">
                        <li className="nav-item ml-4">
                            <Link to="/" className="nav-link text-white">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link to="/products" className="nav-link text-white">Tienda</Link>
                        </li>
                        <li className="nav-item dropdown mx-3">
                            <Link to="/blog" className="nav-link dropdown-toggle text-white" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Blog
                                </Link>
                            <div className="dropdown-menu dropdown-menu-left" aria-labelledby="navbarDropdown">
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
            </div>
        </nav>
    );
};

export default Navbar;