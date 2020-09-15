import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useEffect } from "react";

const Navbar = () => {
    const { store, actions } = useContext(Context);


    return (
        <div className="">
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container">
                    <Link to="/" className="navbar-brand text-white">
                        <img width="100px" height="100px" src="https://www.designevo.com/res/templates/thumb_small/brown-circle-and-chocolate-coffee.png"></img>
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="justify-content-end">
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown btn btn-secondary">
                                    <a
                                        className="nav-link dropdown-toggle text-white"
                                        href="#"
                                        id="navbarDropdownMenuLink"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false">
                                        Cart
							    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <span className="dropdown-item">
                                            Action <i className="fas fa-trash"></i>
                                        </span>
                                        <span className="dropdown-item" href="#">
                                            Another action
								    </span>
                                        <span className="dropdown-item" href="#">
                                            Something else here
								    </span>
                                    </div>
                                </li>
                            </ul>
                        </div>                        
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;