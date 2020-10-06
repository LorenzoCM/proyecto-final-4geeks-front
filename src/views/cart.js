import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { Context } from '../store/appContext';

const Cart = props => {
    const { store, actions } = useContext(Context);
    let total = 0;

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="mt-5">Mi Carrito</h2>
                    {/* Table div */}
                    <div className="table-responsive mt-5">
                        <table className="table table-striped text-center">
                            <thead className="c-coffee text-white">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Producto</th>
                                    <th scope="col"></th>
                                    <th scope="col">Precio</th>
                                    <th scope="col">Cantidad</th>
                                    <th scope="col">Subtotal</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {!!store.cart &&
                                    store.cart.map((product, index) => {
                                        total += product.product.price * product.quantity;
                                        return (
                                            <tr>
                                                <th scope="row">{index + 1}</th>
                                                <td>{product.product.name}</td>
                                                <td><img src={process.env.REACT_APP_URL_API + "products/coffee/" + product.product.image} alt="" className="border border-2 border-dark thumbnail" /></td>
                                                <td>{product.product.price}</td>
                                                <td>{product.quantity}</td>
                                                <td>{(product.product.price * product.quantity).toLocaleString('en-US', { style: 'currency', currency: 'CLP', }) /* $2,500.00 */}</td>
                                                <td><i className="fas fa-trash" onClick={() => actions.deleteProduct(index, product.quantity)}></i></td>
                                            </tr>
                                        )
                                    })}
                            </tbody>
                        </table>
                    </div>
                    {/* Instructions to seller div. */}
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-8">
                            <label for="exampleFormControlTextarea1">Instrucciones especiales al vendedor:</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" width="100%" rows="3"></textarea>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="table-responsive mt-4">
                                <table className="table text-center">
                                    <tbody>
                                        <tr>
                                            <th scope="row">Total:</th>
                                            <td>{(total).toLocaleString('en-US', { style: 'currency', currency: 'CLP', }) /* $2,500.00 */}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {/* Bottom Buttons Area */}
                    <div className="row mt-5">
                        <div className="col d-flex justify-content-between">
                            <Link to='/products' className="btn c-accent text-white">Continuar comprando</Link>
                            <Link to='/checkout' className="btn btn-dark ml-5">Pagar</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
