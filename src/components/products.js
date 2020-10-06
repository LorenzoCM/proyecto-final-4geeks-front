import React, { useContext, useEffect } from 'react';
import { Context } from '../store/appContext';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductCard = (props) => {
    const { store, actions } = useContext(Context);
    // const setIsShown = (bool) =>{
    //     let 
    // }
    return (
        <div className="container mt-5">
            <div className="mb-5">
                <h3>Productos Destacados</h3>
            </div>
            <div className="card-deck d-flew flex-row flex-nowrap overflow-auto">
                {
                    !!store.products &&
                    store.products.map((product, index) => {
                        return (
                            <div className="card-thumbnail mt-2" key={index}>
                                <div className="card border border-2 border-dark rounded-0">
                                    <img src={process.env.REACT_APP_URL_API + "products/coffee/" + product.image} className="card-img-top img-fluid rounded-0" alt="..." />
                                    <div className="card-body border-top border-2 border-dark py-2 px-3" >
                                        <h6 className="card-title">{product.name}</h6>
                                        <p className="card-text my-0">{product.brand}</p>
                                        <p className="card-text my-0">{product.origin}</p>
                                        <p className="card-text my-0">{product.price}</p>
                                        <div className="d-flex align-items-baseline justify-content-between">
                                            <Link to={`/products/${product.id}`} className="btn btn-sm c-coffee text-white mt-1">Ver más</Link>
                                            <div className="d-flex justify-content-center mt-3 btn-group" role="group">
                                                <button className="btn btn-sm c-accent" onClick={() => actions.cartProducts(product)}><i className="fas fa-cart-plus"></i></button>
                                                <select className="btn btn-sm border-accent" id="cartCombo">
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProductCard;

