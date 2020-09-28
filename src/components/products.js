import React, { useContext, useEffect } from 'react';
import { Context } from '../store/appContext';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductCard = (props) => {
    const { store } = useContext(Context);
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
                    !!store.productsGlobal &&
                    store.productsGlobal.map((product, index) => {
                        return (
                            <div className="card-thumbnail mt-2" key={index}>
                                <div className="card border border-dark rounded-0">
                                    <img src={process.env.REACT_APP_URL_API + "products/coffee/" + product.image} className="card-img-top" alt="..." />
                                    <div className="card-body border-top py-2 px-3" >
                                        <h6 className="card-title">{product.name}</h6>
                                        <p className="card-text my-0">{product.brand}</p>
                                        <p className="card-text my-0">{product.origin}</p>
                                        <p className="card-text my-0">${product.price}</p>
                                        <div className="d-flex align-items-baseline mt-2">
                                            <Link to={`/products/${index}`} className="btn btn-sm c-coffee text-white mt-1">Ver más</Link>
                                            <button className="btn btn-sm c-accent ml-1"><i className="fas fa-cart-plus"></i></button>
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

