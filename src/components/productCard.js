import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

const ProductCard = product => {
    const { store, actions } = useContext(Context);
    const [state, setState] = useState(" d-none");

    return (
        <div className="card-thumbnail m-1" onMouseOver={() => setState(" d-flex animate__fadeIn")} onMouseLeave={() => setState(" animate__fadeOut d-flex")}>
            <div className="card border border-2 border-dark rounded-0 d-flex justify-content-center">
                <img src={process.env.REACT_APP_URL_API + "products/coffee/" + product.product.image} className="card-img img-fluid rounded-0" alt="..." />
                <div className={"card-img-overlay text-white rounded-0 p-2 animate__animated flex-column justify-content-around my-auto" + state} >
                    <h6 className="card-title">{product.product.name}</h6>
                    <p className="card-text">{product.product.brand}</p>
                    <p className="card-text">{product.product.origin}</p>
                    <p className="card-text">{product.product.price}</p>
                    <div className="d-flex align-items-baseline">
                        <Link to={`/products/${product.product.id}`} className="btn btn-sm c-coffee text-white mt-1 flex-fill">Ver más</Link>
                        <div className="d-flex justify-content-center mt-3 btn-group w-50" role="group">
                            <button className="btn btn-sm c-accent ml-1" onClick={() => actions.cartProducts(product.product, parseInt(store.productNumber))}><i className="fas fa-cart-plus"></i></button>
                            <input id="cartQuantity" type="number" name="productNumber" className="btn btn-sm border-accent w-25" defaultValue="1" onChange={actions.handleChangeLogin} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;