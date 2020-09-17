import React, { useState } from 'react';
import AccountInfo from '../components/accountInfo';
import MyFavourites from '../components/myfavourites';
import MyOrders from '../components/myorders';

const MyAccount = props => {
    const [a, setA] = useState(true);
    const [b, setB] = useState(false);
    const [c, setC] = useState(false);

    return (
        <>
            <div className="container-fluid">
                <ul className="nav nav-tabs mt-5">
                    <li className="nav-item">
                        <a className={"nav-link" + (a === true ? " active" : "")} onClick={() => {
                            setA(true);
                            setB(false);
                            setC(false);
                        }} href="#">Mis datos</a>
                    </li>
                    <li className="nav-item">
                        <a className={"nav-link" + (b === true ? " active" : "")} onClick={() => {
                            setA(false);
                            setB(true);
                            setC(false);
                        }} href="#">Mis favoritos</a>
                    </li>
                    <li className="nav-item">
                        <a className={"nav-link" + (c === true ? " active" : "")} onClick={() => {
                            setA(false);
                            setB(false);
                            setC(true);
                        }} href="#">Mis compras</a>
                    </li>
                </ul>
                <section>
                    {a === true && <AccountInfo />}
                    {b === true && <MyFavourites />}
                    {c === true && <MyOrders />}
                </section>
                <section>

                </section>
            </div>
        </>
    )
}

export default MyAccount;   