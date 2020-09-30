import React, { useState } from 'react';
import { scryRenderedDOMComponentsWithClass } from 'react-dom/test-utils';

const MyAccount = ({ history, match: { params: { name } } }, ...props) => {
    const [tabs, setTabs] = useState({
        // letters are for
        tabs: "misDatos",
        editPassword: false,
        editData: false,
        editAddress: false
    });

    let user = JSON.parse(sessionStorage.getItem("currentUser"));

    return (
        <>
            <div className="container-fluid">
                <ul className="nav nav-tabs mt-5">
                    <li className="nav-item">
                        <a className={"nav-link" + (tabs.tabs === "misDatos" ? " active" : "")} onClick={() => {
                            setTabs({
                                ...tabs,
                                tabs: "misDatos"
                            })
                        }} href="#">Mis datos</a>
                    </li>
                    <li className="nav-item">
                        <a className={"nav-link" + (tabs.tabs === "misFavoritos" ? " active" : "")} onClick={() => {
                            setTabs({
                                ...tabs,
                                tabs: "misFavoritos"
                            })
                        }} href="#">Mis favoritos</a>
                    </li>
                    <li className="nav-item">
                        <a className={"nav-link" + (tabs.tabs === "misCompras" ? " active" : "")} onClick={() => {
                            setTabs({
                                ...tabs,
                                tabs: "misCompras"
                            })
                        }} href="#">Mis compras</a>
                    </li>
                    <li className="nav-item">
                        <a className={"nav-link" + (tabs.tabs === "productosAdmin" && user.user.role === 'isAdmin' ? " active" : "")} onClick={() => {
                            setTabs({
                                ...tabs,
                                tabs: "productosAdmin"
                            })
                        }} href="#">Administrar Productos</a>
                    </li>
                    <li className="nav-item">
                        <a className={"nav-link" + (tabs.tabs === "usersAdmin" && user.user.role === 'isAdmin' ? " active" : "")} onClick={() => {
                            setTabs({
                                ...tabs,
                                tabs: "usersAdmin"
                            })
                        }} href="#">Administrar Usuarios</a>
                    </li>
                </ul>
                <section>
                    <div className={tabs.tabs === "misDatos" ? "" : "d-none"}>
                        <h5 className="mt-5 mb-3">Mi cuenta</h5 >
                        <form >
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label for="nombrecuenta">Nombre</label>
                                    <input type="text" className="form-control" id="nombrecuenta" defaultValue={user.user.name} readOnly={tabs.editData == false ? true : false} />
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="apellidocuenta">Apellido</label>
                                    <input type="text" className="form-control" id="apellidocuenta" defaultValue={user.user.last_name} readOnly={tabs.editData == false ? true : false} />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label for="emailcuenta">Email</label>
                                    <input type="email" className="form-control" id="emailcuenta" defaultValue={user.user.email} readOnly={tabs.editData == false ? true : false} />
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="telefonocuenta">Teléfono</label>
                                    <input type="phone" className="form-control" id="telefonocuenta" defaultValue={user.user.phone} readOnly={tabs.editData == false ? true : false} />
                                </div>
                            </div>
                            <div className="form-row col-md-6">
                                <button className="btn btn-sm c-coffee text-white ml-n2">Cambiar contraseña</button>
                            </div>
                            <div className="form-group">
                                <label for="inputAddress">Address</label>
                                <input type="text" className="form-control" id="inputAddress" defaultValue={user.user.address} readOnly={tabs.editAddress == false ? true : false} />
                                <span className="text-weight-light small">Cambiar dirección</span>
                            </div>
                            <div className="form-group">
                                <button className="btn c-coffee text-white">Editar</button>
                            </div>
                        </form>
                        {/* <h5 className="mt-5 mb-3">Mi dirección</h5 >
                        <form >
                            <div className="form-group">
                                <label for="inputAddress">Address</label>
                                <input type="text" className="form-control" id="inputAddress" readOnly={tabs.editData == false ? true : false} />
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
                            <span>Cambiar dirección</span>
                        </form> */}
                    </div>
                    <div className={tabs.tabs == "misFavoritos" ? "" : "d-none"}>
                        <h5 className="mt-5 mb-3">Mis productos favoritos</h5 >
                        <div className="card-deck mt-5 w-100 d-flex flex-row flex-nowrap overflow-auto">
                            <div className="card card-thumbnail">
                                <img src="https://rutadelcafeperuano.com/wp-content/uploads/2018/03/NEYRA.png" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </div>
                            </div>
                            <div className="card card-thumbnail">
                                <img src="https://rutadelcafeperuano.com/wp-content/uploads/2018/03/NEYRA.png" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </div>
                            </div>
                            <div className="card card-thumbnail">
                                <img src="https://rutadelcafeperuano.com/wp-content/uploads/2018/03/NEYRA.png" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={tabs.tabs === "misCompras" ? "" : "d-none"}>
                        <form>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label for="inputEmail4">pú</label>
                                    <input type="email" className="form-control" id="inputEmail4" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="inputPassword4">Password</label>
                                    <input type="password" className="form-control" id="inputPassword4" />
                                </div>
                            </div>
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
                            <div className="form-group">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                                    <label className="form-check-label" for="gridCheck">
                                        Check me out
                                        </label>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary">Sign in</button>
                        </form>
                    </div>
                </section>
                <section>

                </section>
            </div>
        </>
    )
}

export default MyAccount;   