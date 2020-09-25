import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../store/appContext';

const ProductDetails = ({ history, match: { params: { index } } }, ...props) => {
    const { store: { products } } = useContext(Context);
    const [product, setProduct] = useState(null);
    useEffect(() => {
        const productData = !!products ? products.filter((product, i) => i == index) : null;
        if (productData !== null) {
            setProduct(...productData);
        }
    });
    return (
        <>
            <div className="container-fluid">
                <section>
                    <div className="row d-flex no-gutters">
                        <div className="col-12 col-lg-7 order-2 order-lg-1 px-lg-5 d-flex flex-column justify-content-around">
                            <div className="d-flex justify-content-between mt-3 mb-2 mb-md-0">
                                <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center">
                                    <h3 className="order-1">{!!product && product.name}</h3>
                                    <span className="align-items-start ml-md-2 order-3 order-md-2">
                                        {/* for average of ratings stars renders: filled for given, outlined for not reached */}
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </span>
                                </div>
                                <div>
                                    <h3 className="order-2 order-lg-3">${!!product && product.price}</h3>
                                </div>
                            </div>
                            {/* for hr's to show in flex column apply margin = 0 */}
                            <hr className="m-0" />
                            <div>
                                {/* Not just these but all values should be replaced with respective match in database :) */}
                                <h6 className="my-4">Tipo: {!!product && product.presentation}</h6>
                                <h6 className="my-4">Origen: {!!product && product.origin}</h6>
                                <h6 className="my-4">Especie: {!!product && product.species}</h6>
                                <h6 className="my-4">Acidez: {!!product && product.acidity}</h6>
                                <h6 className="my-4">Tostado: {!!product && product.roasting}</h6>
                                <h6 className="my-4">{!!product && product.description}</h6>
                            </div>
                            <hr className="m-0" />
                            <div className="d-flex justify-content-center justify-content-md-start mt-3 mt-md-2">
                                {/* {
                                    !!product &&
                                    product.map((format, index) => {
                                        return (
                                            <div className="form-check form-check-inline" key={index}>
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                                <label className="form-check-label" for="inlineRadio1">{format.format}</label>
                                            </div>
                                        )
                                    })
                                } */}
                            </div>
                            <div className="d-flex justify-content-center justify-content-md-start mt-3">
                                <button type="button" className="btn btn-outline-dark">Agregar al carrito</button>
                                <select className="custom-select border border-dark mx-2">
                                    <option value="1" selected>1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                                <button type="button" className="btn btn-outline-dark"><i className="far fa-heart"></i></button>
                            </div>
                        </div>
                        <div className="col-12 col-lg-5 order-1 order-lg-2">
                            <img src={process.env.REACT_APP_URL_API + "products/coffee/" + (!!product && product.image)} className="img-fluid w-100" />
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