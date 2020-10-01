import React, { useContext, useState } from 'react';
import { Context } from '../store/appContext';


const Checkout = (props) => {
    const { store, actions } = useContext(Context);
    const cartData = store.cart;
    const [ payPal, setPayPal] = useState({
        checkout: false,
        paidFor: null,
        loaded: null
    })

    const cartData = JSON.parse(localStorage.getItem("currentCart"));
    let priceSum = cartData.reduce(function (prev, product) {
        let total = (product.product.price * product.quantity);
        return prev + total;
    }, 0);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="text-center mt-5">Escoge tu método de pago:</h2>
                </div>
                <div className="col-md-12">
                    <h4 className="text-center mt-5">Total a pagar:</h4>
                    <h4 className="text-center mt-5">{(priceSum).toLocaleString('en-US', { style: 'currency', currency: 'CLP', }) /* $2,500.00 */}</h4>
                </div>
                <div className="col-md-12 d-flex justify-content-center">
                    <button type="submit" className="btn btn-dark mt-4">Pagar</button>
                </div>
            </div>
        </div>
    )
}

export default Checkout;