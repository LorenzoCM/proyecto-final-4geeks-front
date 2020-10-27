import React, { useContext, useState } from 'react';
import { Context } from '../store/appContext';
import PaypalCheckoutButton from '../components/PayPal';
import { Link } from 'react-router-dom';
import 'mercadopago';


const Checkout = (props) => {
    const { store, actions } = useContext(Context);
    const [pay, setPay] = useState();
    let total = 0;

    const cartData = JSON.parse(localStorage.getItem("currentCart"));
    let priceSum = cartData.reduce(function (prev, product) {
        let total = (product.product.price * product.quantity);
        return prev + total;
    }, 0);

    let unfixedPriceInUSD = priceSum / store.conversionValue;
    let totalPriceInUSD = unfixedPriceInUSD.toFixed(2).toString();

    const getCustomerName = () => {
        let customer = "Invitado";
        if (!!store.currentUser) {
            customer = store.currentUser.user.name + " " + store.currentUser.user.last_name
            return customer;
        } else {
            return customer;
        }
    };

    let customer = getCustomerName();

    const order = {
        customer: customer,
        total: totalPriceInUSD,
        items: [
            {
                sku: '4Geeks Academy Super Coffee Store',
                name: 'Test Coffee Order',
                price: totalPriceInUSD,
                quantity: 1,
                currency: 'USD'
            }
        ]
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6 mt-5">
                    <h3 className="mt-5 mb-3">Estás cada vez más cerca de esa taza de café</h3>
                    <div className="mt-5 mb-3">
                        <div>
                            <div className="c-coffee text-white py-2 pl-2 rounded-top">
                                <h5>Resumen de tus productos:</h5>
                            </div>
                            <div className="c-shade rounded-bottom">
                                {!!store.cart &&
                                    store.cart.map((product, index) => {
                                        total += product.product.price * product.quantity;
                                        return (
                                            <>
                                                <div className="d-flex flex-row py-2 px-2">
                                                    <h6 className="mr-2">{product.quantity}x</h6>
                                                    <h6>{product.product.name}</h6>
                                                    <h6 className="ml-auto">{(product.product.price * product.quantity).toLocaleString('en-US', { style: 'currency', currency: 'CLP', }) /* $2,500.00 */}</h6>
                                                </div>
                                                <hr className="my-0" />
                                            </>
                                        )
                                    })}
                            </div>
                        </div>
                    </div>
                    <div className="c-coffee rounded text-white d-flex justify-content-end align-items-baseline py-3 pl-3">
                        <i className="fas fa-coffee"></i>
                        <div className="d-flex flex-row align-items-baseline mr-2">
                            <h5 className="ml-2 mr-3">Total a pagar:</h5>
                            <h4>{(priceSum).toLocaleString('en-US', { style: 'currency', currency: 'CLP', }) /* $2,500.00 */} (USD {totalPriceInUSD})</h4>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 mt-5 mt-md-auto text-center">
                    <PaypalCheckoutButton order={order} />
                </div>                
            </div>
        </div>
    )
}

export default Checkout;