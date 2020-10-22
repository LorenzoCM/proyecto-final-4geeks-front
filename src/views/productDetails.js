import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
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
                        <span className="btn btn-sm c-accent ml-0 ml-lg-5 my-3" onClick={()=>{history.push("/products")}}><i class="fas fa-angle-double-left"></i></span>
                    </div>
                    <div className="row d-flex no-gutters">
                        <div className="col-12 col-lg-7 order-2 order-lg-1 px-lg-5 d-flex flex-column justify-content-around">
                            <div className="d-flex flex-column mt-3 mb-2 mb-md-0">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h3 className="order-1">{!!store.productDetails && store.productDetails.name}</h3>
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
                                <h6 className="my-4">Tipo: {!!store.productDetails && store.productDetails.ground}</h6>
                                <h6 className="my-4">Origen: {!!store.productDetails && store.productDetails.origin}</h6>
                                <h6 className="my-4">Especie: {!!store.productDetails && store.productDetails.species}</h6>
                                <h6 className="my-4">Acidez: {!!store.productDetails && store.productDetails.acidity}</h6>
                                <h6 className="my-4">Tostado: {!!store.productDetails && store.productDetails.roasting}</h6>
                                <h6 className="my-4">{!!store.productDetails && store.productDetails.description}</h6>
                            </div>
                            <hr className="m-0" />
                            <div className="d-flex justify-content-center justify-content-md-end mt-3 btn-group w-50">
                                <button type="submit" className="btn c-accent text-white" onClick={() => actions.cartProducts(store.productDetails)}>Agregar al carrito<i class="fas fa-cart-plus ml-2"></i></button>
                                <select className="btn border border-accent" defaultValue="1">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-12 col-lg-5 order-1 order-lg-2">
                            <img src={process.env.REACT_APP_URL_API + "products/coffee/" + (!!store.productDetails && store.productDetails.image)} className="img-fluid w-100" />
                        </div>
                    </div>
                </section>
                <section className="my-5">
                    <div className="d-flex justify-content-between align-items-center">
                        <h3 className="mt-5 mb-2">Tal vez te podría interesar:</h3>
                        <h3 className="mt-5 mb-2"><i className="fas fa-angle-double-right"></i></h3>
                    </div>
                    {/* this card is just a placeholder, a mapping function is needed here */}
                    <div className="card-deck mt-5 w-100 d-flex flex-row flex-nowrap overflow-auto">
                        <div className="card card-thumbnail">
                            <img src="https://rutadelcafeperuano.com/wp-content/uploads/2018/03/NEYRA.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                        <div className="card card-thumbnail">
                            <img src="https://rutadelcafeperuano.com/wp-content/uploads/2018/03/NEYRA.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                        <div className="card card-thumbnail">
                            <img src="https://rutadelcafeperuano.com/wp-content/uploads/2018/03/NEYRA.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                        <div className="card card-thumbnail">
                            <img src="https://rutadelcafeperuano.com/wp-content/uploads/2018/03/NEYRA.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                        <div className="card card-thumbnail">
                            <img src="https://rutadelcafeperuano.com/wp-content/uploads/2018/03/NEYRA.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                        <div className="card card-thumbnail">
                            <img src="https://rutadelcafeperuano.com/wp-content/uploads/2018/03/NEYRA.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="my-5">
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-baseline">
                        <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center">
                            <h3>Calificacions y Comentarios</h3>
                            <span className="align-items-start ml-md-2">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </span>
                        </div>
                        <div className="form-group mt-4 mt-md-0">
                            <select className="form-control border border-dark" id="exampleFormControlSelect1">
                                <option>Filtrar por</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                    </div>
                    <hr />
                    {/* do not move the hr above, somehow it doesn't work inside the previous div, not even with margin = 0... */}
                    {/* again, this comments are just placeholders, another mapping function is needed below :) */}
                    <div className="my-3">
                        <div className="d-flex flex-row justify-content-between align-items-center bg-light pt-4">
                            <h4>Ceciclia Bobadilla</h4>
                            <span className="align-items-start ml-md-2">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </span>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas vero distinctio repellat culpa tempora animi quasi, repudiandae neque deserunt quibusdam eius eaque non nihil provident autem! Repellat repudiandae tempore illum?</p>
                        </div>
                        <div className="d-flex justify-content-end text-muted mt-2 pb-2">
                            <h6>30/02/1970</h6>
                        </div>
                        <hr />
                    </div>
                    <div className="my-3">
                        <div className="d-flex flex-row justify-content-between align-items-center bg-light pt-4">
                            <h4>Ceciclia Bobadilla</h4>
                            <span className="align-items-start ml-md-2">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </span>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas vero distinctio repellat culpa tempora animi quasi, repudiandae neque deserunt quibusdam eius eaque non nihil provident autem! Repellat repudiandae tempore illum?</p>
                        </div>
                        <div className="d-flex justify-content-end text-muted mt-2 pb-2">
                            <h6>30/02/1970</h6>
                        </div>
                        <hr />
                    </div>
                    <div className="my-3">
                        <div className="d-flex flex-row justify-content-between align-items-center bg-light pt-4">
                            <h4>Ceciclia Bobadilla</h4>
                            <span className="align-items-start ml-md-2">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </span>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas vero distinctio repellat culpa tempora animi quasi, repudiandae neque deserunt quibusdam eius eaque non nihil provident autem! Repellat repudiandae tempore illum?</p>
                        </div>
                        <div className="d-flex justify-content-end text-muted mt-2 pb-2">
                            <h6>30/02/1970</h6>
                        </div>
                        <hr />
                    </div>
                    <div className="my-3">
                        <div className="d-flex flex-row justify-content-between align-items-center bg-light pt-4">
                            <h4>Ceciclia Bobadilla</h4>
                            <span className="align-items-start ml-md-2">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </span>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas vero distinctio repellat culpa tempora animi quasi, repudiandae neque deserunt quibusdam eius eaque non nihil provident autem! Repellat repudiandae tempore illum?</p>
                        </div>
                        <div className="d-flex justify-content-end text-muted mt-2 pb-2">
                            <h6>30/02/1970</h6>
                        </div>
                        <hr />
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