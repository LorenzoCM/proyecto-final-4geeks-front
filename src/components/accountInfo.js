import React, { useContext, useEffect } from 'react';
import { Context } from './../store/appContext';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const AccountInfo = (props) => {
    return (
        <div>
            <h5 className="mt-5 mb-3">Mi cuenta</h5 >
            <form >
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="nombrecuenta">Nombre</label>
                        <input type="text" className="form-control" id="nombrecuenta" value="Lorenzo" />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="apellidocuenta">Apellido</label>
                        <input type="text" className="form-control" id="apellidocuenta" value="Castillo" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="emailcuenta">Email</label>
                        <input type="email" className="form-control" id="emailcuenta" placeholder="lorenzojcastillom@gmail.com" />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="telefonocuenta">Teléfono</label>
                        <input type="phone" className="form-control" id="telefonocuenta" placeholder="+56951231650" />
                    </div>
                </div>
                <a href="">Cambiar contraseña</a>
            </form>
            <h5 className="mt-5 mb-3">Mi dirección</h5 >
            <form >
                <div className="form-group">
                    <label for="inputAddress">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                </div>
                <div className="form-group">
                    <label for="inputAddress2">Address 2</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputCity">City</label>
                        <input type="text" className="form-control" id="inputCity" />
                    </div>
                    <div className="form-group col-md-4">
                        <label for="inputState">State</label>
                        <select id="inputState" className="form-control">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div className="form-group col-md-2">
                        <label for="inputZip">Zip</label>
                        <input type="text" className="form-control" id="inputZip" />
                    </div>
                </div>
                <a href="">Cambiar dirección</a>
            </form>
        </div>
    )
}

export default AccountInfo;