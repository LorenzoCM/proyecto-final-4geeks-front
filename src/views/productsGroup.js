import React, { useContext } from 'react';
import { Context } from './../store/appContext';
import { Link } from 'react-router-dom';

const ProductsGroup = ({ history, location, match }, ...props) => {
    const { store, actions } = useContext(Context);
    console.log(store.products)
    return (
        <>
            <section>
                <div className="container-fluid mt-5">
                    <div className="row">
                        <div className="col mb-5 d-flex justify-content-center">
                            <h3>Los mejores cafés</h3>
                        </div>
                    </div>
                    <div className="row my-5 mx-1">
                        <div className="col-4 text-muted d-flex align-items-baseline">
                            <h6>Ordenar por</h6>
                            <select className="form-control">
                                <option value="price_up" selected>Precio (ascendente)</option>
                                <option value="price_down">Precio (descendente)</option>
                                <option value="name_up">Nombre (a...z)</option>
                                <option value="name_down">Nombre (z...a)</option>
                                <option value="acidity_up">Acidez (ascendente)</option>
                                <option value="acidity_down">Acidez (descendente)</option>
                                <option value="roast_up">Tostado (ascendente)</option>
                                <option value="roast_down">Tostado (descendente)</option>
                            </select>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container-fluid">
                    <div className="card-deck d-flex justify-content-center">
                        {
                            !!store.products &&
                            store.products.map((product, index) => {
                                return (
                                    <div className="col-3" key={index}>
                                        <div className="card">
                                            <img src={process.env.REACT_APP_URL_API + "products/coffee/" + product.image} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">{product.name}</h5>
                                                <h6 className="card-text">{product.attributes.type}</h6>
                                                <h6 className="card-text">{product.attributes.origin}</h6>
                                                <h6 className="card-text">{product.attributes.roasting}</h6>
                                                <Link to={`/products/${index}`} className="btn btn-primary btn-sm">Ver más</Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        <div className="col-3">
                            <div className="card">
                                <img src="https://rutadelcafeperuano.com/wp-content/uploads/2018/03/NEYRA.png" className="card-img-top" alt="..." />
                                <div className="card-body product-card">
                                    <h5 className="card-title">Café Lorenzo</h5>
                                    <h6 className="card-text">Grano Entero</h6>
                                    <h6 className="card-text">Venezuela</h6>
                                    <h6 className="card-text">95</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductsGroup;