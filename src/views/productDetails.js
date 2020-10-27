import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import ProductCard from '../components/productCard';
import { Context } from '../store/appContext';

const ProductDetails = ({ history, match: { params: { id } } }, ...props) => {
    const { store, actions } = useContext(Context);

    const location = useLocation();
    const getProductDataFromURL = () => {
        let url = location.pathname;
        let aux = url.split("/");
        let id = aux[aux.length - 1];
        return id;
    }

    useEffect(() => {
        window.scrollTo(0, 0); // iniciar la pagina desde arriba
        actions.getProductDetails(getProductDataFromURL())
    }, []);


    return (
        <>
            <div className="container-fluid">
                <section>
                    <div className="row no-gutters">
                        <span className="btn btn-sm c-accent ml-0 ml-lg-5 my-3" onClick={() => { history.push("/products") }}><i className="fas fa-angle-double-left"></i></span>
                    </div>
                    <div className="row d-flex no-gutters">
                        <div className="col-12 col-lg-7 order-2 order-lg-1 px-lg-5 d-flex flex-column justify-content-around">
                            <div className="d-flex flex-column mt-3 mb-2 mb-md-0">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h2 className="order-1">{!!store.productDetails && store.productDetails.name}</h2>
                                    <h3 className="order-2 order-lg-3">${!!store.productDetails && store.productDetails.price}</h3>
                                </div>
                                <div>
                                    <h4 className="text-muted">{!!store.productDetails && store.productDetails.brand}</h4>
                                </div>
                            </div>
                            {/* for hr's to show in flex column apply margin = 0 */}
                            <hr className="m-0" />
                            <div>
                                {/* Not just these but all values should be replaced with respective match in database :) */}
                                <h4 className="my-4">Tipo: {!!store.productDetails && store.productDetails.ground}</h4>
                                <h4 className="my-4">Origen: {!!store.productDetails && store.productDetails.origin}</h4>
                                <h4 className="my-4">Especie: {!!store.productDetails && store.productDetails.species}</h4>
                                <h4 className="my-4">Acidez: {!!store.productDetails && store.productDetails.acidity}</h4>
                                <h4 className="my-4">Presentación: {!!store.productDetails && store.productDetails.presentation}</h4>
                                <h4 className="my-4">Tostado: {!!store.productDetails && store.productDetails.roasting}</h4>
                                <h4 className="my-4">{!!store.productDetails && store.productDetails.description}</h4>
                            </div>
                            <hr className="m-0" />
                            <div className="d-flex justify-content-center justify-content-md-start mt-3 btn-group w-50">
                                <div className="d-flex justify-content-start mt-3 btn-group" role="group">
                                    <input id="cartQuantity2" type="number" name="productNumber" className="btn btn-lg border-accent w-25" defaultValue="1" onChange={actions.handleChangeLogin} />
                                    <button className="btn btn-lg c-accent" onClick={() => actions.cartProducts(store.productDetails, parseInt(store.productNumber))}><i className="fas fa-cart-plus"></i></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-5 order-1 order-lg-2">
                            <img src={process.env.REACT_APP_URL_API + "products/coffee/" + (!!store.productDetails && store.productDetails.image)} className="img-fluid w-100" />
                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}

export default ProductDetails;














































// That sound tie fighters do that nobody can imitate~~~

// ||                          ||
// ||                          ||
// ||                          ||
// ||                          ||
// ||                          ||
// ||           ____           ||
// ||         .''''''.         ||
// ||        /   __   \        ||
// ||\__..-':   /\/\   :'-..__/||
// ||=__ =|='  |-()-|  '=|= __=||
// ||/  ''-.:   \/\/   :.-''  \||
// ||        \   ""   /        ||
// ||         `.____.'         ||
// ||                          ||
// ||                          ||
// ||                          ||
// ||                          ||
// ||                          ||
// ||           tre            ||