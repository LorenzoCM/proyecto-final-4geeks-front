import React, { useContext, useEffect, useState } from 'react';
import { Context } from './../store/appContext';
import { Link } from 'react-router-dom';

const ProductsGroup = ({ history, location, match }, ...props) => {
    const { store, actions } = useContext(Context);

    const [brewing, setBrewing] = useState({
        sorting: "priceup",
        groundFilter: [],
        originFilter: [],
        pricefilterMin: 0,
        pricefilterMax: 99999
    });

    useEffect(() => {
        // fetchs products based on sorting order        
        actions.getProductsFiltered(brewing)
        console.log(brewing)
    }, [brewing]);
   

    // sets apiURL from onChange in <select id="sortCombo"> 
    const handleSort = (e) => {
        if (e.target.value == 2) {
            setBrewing({ ...brewing, sorting: "pricedown" });
        }
        else if (e.target.value == 3) {
            setBrewing({ ...brewing, sorting: "brandup" })
        }
        else if (e.target.value == 4) {
            setBrewing({ ...brewing, sorting: "branddown" })
        }
        else {
            setBrewing({ ...brewing, sorting: "priceup" })
        }
    };

    // adds or deletes ground type filters
    const handleGroundFilters = e => {
        if (brewing.groundFilter.length === 0) {
            setBrewing({ ...brewing, groundFilter: [e.target.value] })
        } else if (brewing.groundFilter.length > 0) {
            let aux = brewing.groundFilter
            for (let i = 0; i < brewing.groundFilter.length; i++) {
                if (brewing.groundFilter[i] === e.target.value) {
                    aux.splice(i, 1)
                    setBrewing({
                        ...brewing,
                        groundFilter: aux
                    })
                } else {
                    setBrewing({
                        ...brewing,
                        groundFilter: brewing.groundFilter.concat(e.target.value)
                    })
                }
            }
        }
    }

    // adds or deletes origin type filters
    const handleOriginFilters = e => {
        if (brewing.originFilter.length === 0) {
            setBrewing({ ...brewing, originFilter: [e.target.value] })
            console.log(brewing.originFilter)
        } else if (brewing.originFilter.length > 0) {
            let aux = brewing.originFilter
            for (let i = 0; i < brewing.originFilter.length; i++) {
                if (brewing.originFilter[i] === e.target.value) {
                    aux.splice(i, 1)
                    setBrewing({
                        ...brewing,
                        originFilter: aux
                    })
                } else {
                    setBrewing({
                        ...brewing,
                        originFilter: brewing.originFilter.concat(e.target.value)
                    })
                }
            }
        }
    }

    return (
        <>
            {/* <!-- Section: Sidebar --> */}
            <div className="container-fluid">
                <div className="row">
                    <section className="col-2 c-coffee text-white">

                        {/* <!-- Section: Filters --> */}
                        <section className="d-flex flex-column align-items-start ml-2">

                            <h5 className="mt-3">Filters</h5>

                            {/* <!-- Section: Type --> */}
                            <section className="d-flex flex-column my-4">

                                <h6 className="font-weight-bold">Tipo</h6>
                                <div className="pl-4">
                                    <div className="form-check pl-0 mb-3">
                                        <input type="checkbox" className="form-check-input filled-in" id="grano" value="Grano" onClick={e => handleGroundFilters(e)} />
                                        <label className="form-check-label small text-uppercase card-link-secondary" htmlFor="grano">Grano Entero</label>
                                    </div>
                                    <div className="form-check pl-0 mb-3">
                                        <input type="checkbox" className="form-check-input filled-in" id="molido" value="Molido" onClick={e => handleGroundFilters(e)} />
                                        <label className="form-check-label small text-uppercase card-link-secondary" htmlFor="molido">Molido</label>
                                    </div>
                                    <div className="form-check pl-0 mb-3">
                                        <input type="checkbox" className="form-check-input filled-in" id="capsula" value="Cápsulas" onClick={e => handleGroundFilters(e)} />
                                        <label className="form-check-label small text-uppercase card-link-secondary" htmlFor="capsula">Cápsulas</label>
                                    </div>
                                </div>

                            </section>
                            {/* <!-- Section: Type --> */}

                            {/* <!-- Section: Average --> */}
                            {/* <section className="mb-4">

                                <h6 className="font-weight-bold mb-3">Rating</h6>

                                <a href="#!">
                                    <ul className="list-group list-group-horizontal d-flex align-items-baseline">
                                        <li className="list-group-item border-0 p-0 m-0">
                                            <i className="fas fa-star fa-sm text-dark"></i>
                                        </li>
                                        <li className="list-group-item border-0 p-0 m-0">
                                            <i className="fas fa-star fa-sm text-dark"></i>
                                        </li>
                                        <li className="list-group-ite border-0 p-0 m-0">
                                            <i className="fas fa-star fa-sm text-dark"></i>
                                        </li>
                                        <li className="list-group-item border-0 p-0 m-0">
                                            <i className="fas fa-star fa-sm text-dark"></i>
                                        </li>
                                        <li className="list-group-item border-0 p-0 m-0">
                                            <i className="far fa-star fa-sm text-dark"></i>
                                        </li>
                                        <li className="list-group-item border-0 p-0 m-0">
                                            <p className="small text-dark ml-1">o más</p>
                                        </li>
                                    </ul>
                                </a>
                                <a href="#!">
                                    <ul className="list-group list-group-horizontal d-flex align-items-baseline">
                                        <li className="list-group-item border-0 p-0 m-0">
                                            <i className="fas fa-star fa-sm text-dark"></i>
                                        </li>
                                        <li className="list-group-item border-0 p-0 m-0">
                                            <i className="fas fa-star fa-sm text-dark"></i>
                                        </li>
                                        <li className="list-group-item border-0 p-0 m-0">
                                            <i className="fas fa-star fa-sm text-dark"></i>
                                        </li>
                                        <li className="list-group-item border-0 p-0 m-0">
                                            <i className="far fa-star fa-sm text-dark"></i>
                                        </li>
                                        <li className="list-group-item border-0 p-0 m-0">
                                            <i className="far fa-star fa-sm text-dark"></i>
                                        </li>
                                        <li className="list-group-item border-0 p-0 m-0">
                                            <p className="small text-dark ml-1">o más</p>
                                        </li>
                                    </ul>
                                </a>
                                <a href="#!">
                                    <ul className="list-group list-group-horizontal d-flex align-items-baseline">
                                        <li className="list-group-item border-0 p-0 m-0">
                                            <i className="fas fa-star fa-sm text-dark"></i>
                                        </li>
                                        <li className="list-group-item border-0 p-0 m-0">
                                            <i className="fas fa-star fa-sm text-dark"></i>
                                        </li>
                                        <li className="list-group-item border-0 p-0 m-0">
                                            <i className="far fa-star fa-sm text-dark"></i>
                                        </li>
                                        <li className="list-group-item border-0 p-0 m-0">
                                            <i className="far fa-star fa-sm text-dark"></i>
                                        </li>
                                        <li className="list-group-item border-0 p-0 m-0">
                                            <i className="far fa-star fa-sm text-dark"></i>
                                        </li>
                                        <li className="list-group-item border-0 p-0 m-0">
                                            <p className="small text-dark ml-1">o más</p>
                                        </li>
                                    </ul>
                                </a>
                                <a href="#!">
                                    <ul className="list-group list-group-horizontal d-flex align-items-baseline">
                                        <li className="list-group-item border-0 p-0 m-0">
                                            <i className="fas fa-star fa-sm text-dark"></i>
                                        </li>
                                        <li className="list-group-item border-0 p-0 m-0">
                                            <i className="far fa-star fa-sm text-dark"></i>
                                        </li>
                                        <li className="list-group-item border-0 p-0 m-0">
                                            <i className="far fa-star fa-sm text-dark"></i>
                                        </li>
                                        <li className="list-group-item border-0 p-0 m-0">
                                            <i className="far fa-star fa-sm text-dark"></i>
                                        </li>
                                        <li className="list-group-item border-0 p-0 m-0">
                                            <i className="far fa-star fa-sm text-dark"></i>
                                        </li>
                                        <li className="list-group-item border-0 p-0 m-0">
                                            <p className="small text-dark ml-1">o más</p>
                                        </li>
                                    </ul>
                                </a>

                            </section> */}
                            {/* <!-- Section: Average --> */}

                            {/* <!-- Section: Price version 2 --> */}
                            <section className="mb-4">

                                <h6 className="font-weight-bold mb-3">Price</h6>
                                {/* this slider is to be implemented in the future
                                <div className="slider-price d-flex align-items-center my-4">
                                    <span className="font-weight-normal small text-muted mr-2">$0</span>
                                    <form className="multi-range-field w-100 mb-1">
                                        <input id="multi" className="multi-range" type="range" />
                                    </form>
                                    <span className="font-weight-normal small text-muted ml-2">$100</span>
                                </div> */}

                                <form>
                                    <div className="mt-4 pb-1">
                                        <div className="md-form md-outline my-0">
                                            <label htmlFor="priceMin" className="mb-0">$ Min</label>
                                            <input id="priceMin" type="number" className="form-control mb-2" onChange={e => { setBrewing({ ...brewing, pricefilterMin: e.target.value }) }} />
                                            <label htmlFor="priceMax" className="mt-2 mb-0">$ Max</label>
                                            <input id="priceMax" type="number" className="form-control" onChange={e => { setBrewing({ ...brewing, pricefilterMax: e.target.value }) }} />
                                        </div>
                                        <a className="badge badge-secondary text-sm mt-3" onClick={() => { setBrewing({ ...brewing, pricefilterMin: 0, pricefilterMax: 99999 }) }}>Reset</a>
                                    </div>
                                </form>

                            </section>
                            {/* <!-- Section: Price version 2 --> */}

                            {/* <!-- Section: Origin --> */}
                            <section className="mb-4">
                                <div className="pl-3">
                                    <h6 className="font-weight-bold mb-3">Origen</h6>

                                    <div className="form-check pl-0 mb-3">
                                        <input type="checkbox" className="form-check-input filled-in" id="colombia" value="Colombia" onClick={e => handleOriginFilters(e)} />
                                        <label className="form-check-label small text-uppercase card-link-secondary" htmlFor="colombia">Colombia</label>
                                    </div>
                                    <div className="form-check pl-0 mb-3">
                                        <input type="checkbox" className="form-check-input filled-in" id="venezuela" value="Venezuela" onClick={e => handleOriginFilters(e)} />
                                        <label className="form-check-label small text-uppercase card-link-secondary" htmlFor="venezuela">Venezuela</label>
                                    </div>
                                    <div className="form-check pl-0 mb-3">
                                        <input type="checkbox" className="form-check-input filled-in" id="ecuador" value="Ecuador" onClick={e => handleOriginFilters(e)} />
                                        <label className="form-check-label small text-uppercase card-link-secondary" htmlFor="ecuador">Ecuador</label>
                                    </div>
                                    <div className="form-check pl-0 mb-3">
                                        <input type="checkbox" className="form-check-input filled-in" id="peru" value="Perú" onClick={e => handleOriginFilters(e)} />
                                        <label className="form-check-label small text-uppercase card-link-secondary" htmlFor="peru">Perú</label>
                                    </div>
                                    <a className="btn btn-link text-muted p-0" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                        más
                                    </a>
                                    <div className="collapse pt-3" id="collapseExample">
                                        <div className="form-check pl-0 mb-3">
                                            <input type="checkbox" className="form-check-input filled-in" id="guatemala" value="Guatemala" onClick={e => handleOriginFilters(e)} />
                                            <label className="form-check-label small text-uppercase card-link-secondary" htmlFor="guatemala">Guatemala</label>
                                        </div>
                                        <div className="form-check pl-0 mb-3">
                                            <input type="checkbox" className="form-check-input filled-in" id="panama" value="Panamá" onClick={e => handleOriginFilters(e)} />
                                            <label className="form-check-label small text-uppercase card-link-secondary" htmlFor="panama">Panamá</label>
                                        </div>
                                        <div className="form-check pl-0 mb-3">
                                            <input type="checkbox" className="form-check-input filled-in" id="costa_rica" value="Costa_Rica" onClick={e => handleOriginFilters(e)} />
                                            <label className="form-check-label small text-uppercase card-link-secondary" htmlFor="costa_rica">Costa Rica</label>
                                        </div>
                                        <div className="form-check pl-0 mb-3">
                                            <input type="checkbox" className="form-check-input filled-in" id="brasil" value="Brasil" onClick={e => handleOriginFilters(e)} />
                                            <label className="form-check-label small text-uppercase card-link-secondary" htmlFor="brasil">Brasil</label>
                                        </div>
                                    </div>
                                </div>

                            </section>
                            {/* <!-- Section: Origin --> */}

                            {/* <!-- Section: Categories --> */}
                            {/* <section className="mb-4">

                                <h6 className="font-weight-bold mb-3">Categorías</h6>

                                <div>
                                    {
                                        !!store.categories &&
                                        store.categories.map((category, index) => {
                                            return (
                                                <span className="badge badge-info" key={index}>{category.name}</span>
                                            )
                                        })
                                    }
                                </div>

                            </section> */}
                            {/* <!-- Section: Categories --> */}

                        </section>
                        {/* <!-- Section: Filters --> */}

                    </section>
                    {/* <!-- Section: Sidebar --> */}

                    <section className="col-10">
                        <div>
                            <hr />
                            <div className="d-flex justify-content-end align-items-baseline mt-n2 mb-n3">
                                <p className="mr-2">Ordenar por</p>
                                <select className="custom-select w-25" id="sortCombo" onChange={e => handleSort(e)}>
                                    <option value="1">Precio (ascendente)</option>
                                    <option value="2">Precio (descendente)</option>
                                    <option value="3">Marca (A...Z</option>
                                    <option value="4">Marca (Z...A)</option>
                                </select>
                            </div>
                            <hr />
                        </div>
                        <div>
                            <div className="card-deck d-flex my-0">
                                {
                                    !!store.products &&
                                    store.products.map((product, index) => {
                                        return (
                                            <div className="card-thumbnail mt-2" key={index}>
                                                <div className="card border border-dark rounded-0">
                                                    <img src={process.env.REACT_APP_URL_API + "products/coffee/" + product.image} className="card-img-top" alt="..." />
                                                    <div className="card-body border-top py-2 px-3" >
                                                        <h6 className="card-title">{product.name}</h6>
                                                        <p className="card-text my-0">{product.brand}</p>
                                                        <p className="card-text my-0">{product.origin}</p>
                                                        <p className="card-text my-0">{product.price}</p>
                                                        <div className="d-flex align-items-baseline justify-content-between">
                                                            <Link to={`/products/${product.id}`} className="btn btn-sm c-coffee text-white mt-1">Ver más</Link>
                                                            <button className="btn btn-sm c-accent ml-1" onClick={()=> actions.cartProducts(product)}><i className="fas fa-cart-plus"></i></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}


export default ProductsGroup;