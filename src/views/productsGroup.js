import React, { useContext, useEffect, useState } from 'react';
import { Context } from './../store/appContext';
import { Link } from 'react-router-dom';
import ProductCard from '../components/productCard';

const ProductsGroup = ({ history, location, match }, ...props) => {
    const { store, actions } = useContext(Context);

    const [brewing, setBrewing] = useState({
        sorting: "priceup",
        groundFilter: [],
        originFilter: [],
        pricefilterMin: 0,
        pricefilterMax: 99999,
        showOrigins: false
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
            <div className="modal fade" id="brewingCoffee" tabIndex="-1" aria-labelledby="brewingFilters" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content c-coffee text-white">
                        <div className="modal-header border-bottom border-secondary">
                            <h5 className="modal-title" id="brewingFilters">Filtros</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i className="fas fa-times text-white"></i></span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-12 col-md-6 d-flex">
                                    <div className="d-flex flex-column justify-content-between">
                                        <h6 className="font-weight-bold">Tipo</h6>
                                        <div className="form-check pl-3 d-flex align-items-baseline my-3 my-md-auto">
                                            <input type="checkbox" className="form-check-input filled-in" id="grano" value="Grano" onClick={e => handleGroundFilters(e)} />
                                            <label className="form-check-label small text-uppercase card-link-secondary" htmlFor="grano">Grano Entero</label>
                                        </div>
                                        <div className="form-check pl-3 d-flex align-items-baseline my-3 my-md-auto">
                                            <input type="checkbox" className="form-check-input filled-in" id="molido" value="Molido" onClick={e => handleGroundFilters(e)} />
                                            <label className="form-check-label small text-uppercase card-link-secondary" htmlFor="molido">Molido</label>
                                        </div>
                                        <div className="form-check pl-3 mb-4 d-flex align-items-baseline my-3 my-md-auto">
                                            <input type="checkbox" className="form-check-input filled-in" id="capsula" value="Cápsulas" onClick={e => handleGroundFilters(e)} />
                                            <label className="form-check-label small text-uppercase card-link-secondary" htmlFor="capsula">Cápsulas</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <h6 className="font-weight-bold mb-3">Precio</h6>
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
                                                <input id="priceMin" type="number" className="form-control mb-2" onChange={e => { e.target.value == "" ? setBrewing({ ...brewing, pricefilterMin: 0 }) : setBrewing({ ...brewing, pricefilterMin: e.target.value }) }} />
                                                <label htmlFor="priceMax" className="mt-2 mb-0">$ Max</label>
                                                <input id="priceMax" type="number" className="form-control" onChange={e => { e.target.value == "" ? setBrewing({ ...brewing, pricefilterMax: 99999 }) : setBrewing({ ...brewing, pricefilterMax: e.target.value }) }} />
                                            </div>
                                            <a className="badge badge-secondary text-sm mt-3" onClick={() => { setBrewing({ ...brewing, pricefilterMin: 0, pricefilterMax: 99999 }) }}>Reset</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-12 d-flex flex-column">
                                    <h6 className="font-weight-bold mb-3">Origen</h6>
                                    <div className="d-flex flex-column flex-md-row justify-content-between px-3">
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
                                    </div>
                                    <div className={"px-3 animate__animated justify-content-between flex-column flex-md-row" + (brewing.showOrigins == true ? " d-flex animate__fadeInUp " : " d-none")} id="originCollapse">
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
                                    <div>
                                        <a className="btn btn-link text-muted" onClick={()=>{brewing.showOrigins == false ? setBrewing({showOrigins: true}) : setBrewing({showOrigins: false})}}>
                                            {brewing.showOrigins == false ? "más origenes" : "menos origenes"}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Section: Sidebar --> */}
            <section className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <hr className="mb-2" />
                        <div className="d-flex justify-content-between align-items-baseline w-100">
                            <button type="button" className="btn c-coffee text-white" data-toggle="modal" data-target="#brewingCoffee">Filtros</button>
                            <div className="d-flex justify-content-end align-items-baseline mt-n2 mb-n3">
                                <p className="mr-2 text-nowrap">Ordenar por</p>
                                <select className="custom-select" id="sortCombo" onChange={e => handleSort(e)}>
                                    <option value="1">Precio (ascendente)</option>
                                    <option value="2">Precio (descendente)</option>
                                    <option value="3">Marca (A...Z</option>
                                    <option value="4">Marca (Z...A)</option>
                                </select>
                            </div>
                        </div>
                        <hr className="mt-2" />
                    </div>
                    <div className="row">
                        <div className="d-flex flex-wrap col-12 justify-content-center justify-content-sm-between  justify-content-lg-start">
                            {
                                !!store.products &&
                                store.products.map((coffee, index) => {
                                    return (
                                        <ProductCard product={coffee} key={index} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default ProductsGroup;