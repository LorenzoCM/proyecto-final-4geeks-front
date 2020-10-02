import React, { useContext, useState } from 'react';
import { Context } from '../store/appContext';
import PaypalCheckoutButton from '../components/PayPal';


const Checkout = (props) => {
    const { store, actions } = useContext(Context);

    const cartData = JSON.parse(localStorage.getItem("currentCart"));
    let priceSum = cartData.reduce(function (prev, product) {
        let total = (product.product.price * product.quantity);
        return prev + total;
    }, 0);

    let unfixedPriceInUSD = priceSum/store.conversionValue;
    let totalPriceInUSD = unfixedPriceInUSD.toFixed(2).toString();

    const getCustomerName = () =>{
        let customer = "Invitado";
        if (!!store.currentUser){
            customer = store.currentUser.user.name+" "+store.currentUser.user.last_name
            return customer;
        }else{
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
                <div className="col-md-12">
                    <h2 className="text-center mt-5">Escoge tu método de pago:</h2>
                </div>
                <div className="col-md-12">
                    <h4 className="text-center mt-5">Total a pagar:</h4>
                    <h4 className="text-center mt-5">{(priceSum).toLocaleString('en-US', { style: 'currency', currency: 'CLP', }) /* $2,500.00 */} (USD {totalPriceInUSD})</h4>
                </div>
                <div className="col-md-12 d-flex justify-content-center">
                    <PaypalCheckoutButton order={order} />
                </div>
            </div>
        </div>
    )
}

export default Checkout;