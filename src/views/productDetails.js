import React from 'react';

const ProductDetails = props => {
    return (
        <>
            <div className="container-fluid">
                <section>
                    <div className="row d-flex no-gutters">
                        <div className="col-12 col-lg-7 order-2 order-lg-1 px-lg-5 d-flex flex-column justify-content-around">
                            <div className="d-flex justify-content-between mt-3 mb-2 mb-md-0">
                                <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center">
                                    <h1 className="order-1">Café Lorenzo</h1>
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
                                    <h1 className="order-2 order-lg-3">$12.000</h1>
                                </div>
                            </div>
                            {/* for hr's to show in flex column apply margin = 0 */}
                            <hr className="m-0" />
                            <div>
                                {/* Not just these but all values should be replaced with respective match in database :) */}
                                <h4 className="my-4">Tipo:</h4>
                                <h4 className="my-4">Origen:</h4>
                                <h4 className="my-4">Especie:</h4>
                                <h4 className="my-4">Acidez:</h4>
                                <h4 className="my-4">Tostado:</h4>
                                <h4 className="my-4">Terroir:</h4>
                            </div>
                            <hr className="m-0" />
                            <div className="d-flex justify-content-center justify-content-md-start mt-3 mt-md-2">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                    <label className="form-check-label" for="inlineRadio1">100gr</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                    <label className="form-check-label" for="inlineRadio2">250gr</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                                    <label className="form-check-label" for="inlineRadio3">500gr</label>
                                </div>
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
                            <img src="https://place-hold.it/768x768" className="img-fluid w-100" />
                        </div>
                    </div>
                </section>
                <section className="my-5">
                    <div className="d-flex justify-content-between align-items-center">
                        <h3 className="mt-5 mb-2">Tal vez te podría interesar:</h3>
                        <h3 className="mt-5 mb-2"><i class="fas fa-angle-double-right"></i></h3>
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
                <section>

                </section>
            </div>
        </>
    )
}

export default ProductDetails;