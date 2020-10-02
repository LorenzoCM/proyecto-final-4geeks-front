import React, { useContext, useState } from 'react';
import { Context } from '../store/appContext';
import PaypalCheckoutButton from '../components/PayPal';


const Checkout = (props) => {
    const { store, actions } = useContext(Context);
    const order = {
        customer: '123456',
        total: '10.00',
        items: [
            {
                sku: '112',
                name: 'Test Coffee',
                price: '5.00',
                quantity: 2,
                currency: 'USD'
            }
        ]
    }

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
                    <PaypalCheckoutButton order={order} />
                </div>
            </div>
        </div>
    )
}

export default Checkout;