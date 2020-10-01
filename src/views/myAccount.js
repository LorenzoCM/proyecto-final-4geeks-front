import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../store/appContext';

const MyAccount = ({ history, match: { params: { name } } }, ...props) => {
    const { store, actions } = useContext(Context)
    const [tabs, setTabs] = useState({
        // letters are for
        tabs: "misDatos",
        editPassword: false,
        validatePassword: null,
        passwordIsValidated: false,
        editData: false,
        editAddress: false,
        userID: null

    });
    const [filters, setFilters] = useState({
        sorting: "nameup",
        is_admin: ["isUser", "isAdmin"]
    });

    const handleSort = (e) => {
        if (e.target.value == 2) {
            setFilters({ ...filters, sorting: "namedown" });
        }
        else {
            setFilters({ ...filters, sorting: "nameup" })
        }
    };

    const handleIsAdmin = (e) => {
        if (e.target.value == "user") {
            setFilters({ ...filters, is_admin: ["isUser"] });
        } else if (e.target.value == "admin") {
            setFilters({ ...filters, is_admin: ["isAdmin"] })
        } else {
            setFilters({ ...filters, is_admin: [] })
        }
    };

    const handleEditPassword = e => {
        e.preventDefault();
        if (tabs.editPassword == false) {
            setTabs({ ...tabs, editPassword: true })
        } else {
            setTabs({ ...tabs, editPassword: false })
        }
    };

    const compareCurrentPassword = e => {
        e.preventDefault()
        let userEmail = user.user.email;
        let password = tabs.validatePassword;
        fetch("http://127.0.0.1:5000/api/users/validation", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: userEmail,
                password: password
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.msg === "ok") {
                    setTabs({
                        ...tabs,
                        validatePassword: null,
                        passwordIsValidated: true
                    })
                } else {
                    return
                }
            })
            .catch((error) => {
                console.log(error)
            });
    };

    const handleEditAddress = e => {
        e.preventDefault();
        if (tabs.editAddress == false) {
            setTabs({ ...tabs, editAddress: true })
        } else {
            setTabs({ ...tabs, editAddress: false })
        }
    };

    const handleEditData = e => {
        e.preventDefault();
        if (tabs.editData == false) {
            setTabs({ ...tabs, editData: true })
        } else {
            setTabs({ ...tabs, editData: false })
        }
    };

    const handleUserPutFromPassword = (e) => {
        e.preventDefault();
    };

    const handleUserPutFromAdress = (e) => {
        e.preventDefault();
    };

    const handleUserPutFromData = (e) => {
        e.preventDefault();
    };

    const handleMakeAdmin = (e, user) => {
        e.preventDefault();
        console.log(user)
        if (user.role === "isUser") {
            user.role = "isAdmin"
        } else {
            user.role = "isUser"
        }
        actions.putUserFromList(user)
    }

    let user = JSON.parse(sessionStorage.getItem("currentUser"));

    useEffect(() => {
        actions.setCurrentUser(user)
    }, [])

    useEffect(() => {
        actions.getUsers(filters)
    }, [filters]);

    return (
        <>
            <div class="modal fade" id="deleteUserModal" tabindex="-1" aria-labelledby="deleteUserModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="deleteUserModalLabel">Eliminar Usuario</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">Estás seguro?</div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Volver</button>
                            <button type="button" class="btn btn-danger" onClick={()=>{actions.deleteUser(tabs.userID); setTabs({...tabs, userID: null})}} >Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <ul className="nav nav-tabs mt-5 d-flex align-items-baseline">
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
                    {
                        user.user.role === "isAdmin" &&
                        <>
                            <li className="nav-item ml-3">
                                <a className={"nav-link" + (tabs.tabs === "productosAdmin" && " active")} onClick={() => {
                                    setTabs({
                                        ...tabs,
                                        tabs: "productosAdmin"
                                    })
                                }} href="#">Administrar Productos</a>
                            </li>
                            <li className="nav-item ml-4">
                                <a className={"nav-link" + (tabs.tabs === "usersAdmin" && " active")} onClick={() => {
                                    setTabs({
                                        ...tabs,
                                        tabs: "usersAdmin"
                                    })
                                }} href="#">Administrar Usuarios</a>
                            </li>
                        </>
                    }
                </ul>
                <section>
                    {
                        tabs.tabs === "misDatos" &&
                        <div>
                            {
                                store.error !== null && (
                                    <div className="alert alert-warning alert-dismissible fade show" role="alert">
                                        <strong>Holy guacamole! </strong>
                                        {!!store.error.name && store.error.name}
                                        {!!store.error.last_name && store.error.last_name}
                                        {!!store.error.reg_password && store.error.reg_password}
                                        {!!store.error.reg_email && store.error.reg_email}
                                        {!!store.error.address && store.error.address}
                                        {!!store.error.phone && store.error.phone}
                                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                )

                            }
                            <form >
                                <div className="d-flex justify-content-between align-items-baseline">
                                    <h5 className="mt-5 mb-3">Mi cuenta</h5 >
                                    {
                                        tabs.editData == false ?
                                            <button className="btn c-accent text-white" onClick={e => handleEditData(e)}>Editar mis datos</button>
                                            :
                                            <button className="btn c-coffee text-white" onClick={e => handleUserPutFromData(e)}>Cambiar mis datos</button>
                                    }
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label for="nombrecuenta">Nombre</label>
                                        <input type="text" className="form-control" name="name" id="nombrecuenta" defaultValue={user.user.name} readOnly={tabs.editData == false ? true : false} onChange={e => { actions.handleChangeLogin(e) }} />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label for="apellidocuenta">Apellido</label>
                                        <input type="text" className="form-control" name="last_name" id="apellidocuenta" defaultValue={user.user.last_name} readOnly={tabs.editData == false ? true : false} onChange={e => { actions.handleChangeLogin(e) }} />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label for="emailcuenta">Email</label>
                                        <input type="email" className="form-control" name="email" id="emailcuenta" defaultValue={user.user.email} readOnly={tabs.editData == false ? true : false} onChange={e => { actions.handleChangeLogin(e) }} />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label for="telefonocuenta">Teléfono</label>
                                        <input type="phone" className="form-control" name="phone" id="telefonocuenta" defaultValue={user.user.phone} readOnly={tabs.editData == false ? true : false} onChange={e => { actions.handleChangeLogin(e) }} />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-4">
                                        {
                                            tabs.editPassword == true && !tabs.passwordIsValidated &&
                                            <>
                                                <label for="passwordcuenta">Password Actual</label>
                                                <input type="password" className="form-control" id="passwordcuenta" onChange={e => setTabs({
                                                    ...tabs,
                                                    validatePassword: e.target.value
                                                })} />
                                            </>
                                        }
                                    </div>
                                    {
                                        tabs.passwordIsValidated == true && (
                                            <>
                                                <div className="form-group col-md-4">
                                                    <label for="nuevopasswordcuenta" >Nuevo Password</label>
                                                    <input type="password" className="form-control" id="nuevopasswordcuenta" readOnly={tabs.passwordIsValidated == false ? true : false} />
                                                </div>
                                                <div className="form-group col-md-4">
                                                    <label for="nuevopasswordcuentaV" >Repite tu nuevo Password</label>
                                                    <input type="password" className="form-control" id="nuevopasswordcuentaV" readOnly={tabs.passwordIsValidated == false ? true : false} />
                                                </div>
                                            </>
                                        )
                                    }
                                    <div className={"form-group col-md-12 d-flex align-items-baseline" + (tabs.editPassword == true ? " justify-content-end" : " justify-content-start")}>
                                        <button className={"btn btn-sm c-silver border border-dark text-dark" + (tabs.editPassword == true ? " d-none" : "")} onClick={e => handleEditPassword(e)}>Editar Contraseña</button>
                                        {
                                            tabs.editPassword == true && !tabs.passwordIsValidated ?
                                                <>
                                                    <h6 className="mr-2">Confirma tu contraseña actual</h6>
                                                    <button className="btn btn-sm c-accent text-white" onClick={e => compareCurrentPassword(e)}>Confirmar</button>
                                                </>
                                                : tabs.editPassword == true && tabs.passwordIsValidated &&
                                                <button className="btn btn-sm c-coffee text-white" onClick={e => handleUserPutFromPassword(e)}>Cambiar Contraseña</button>
                                        }
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <label for="inputAddress">Address</label>
                                        <input type="text" className="form-control" id="inputAddress" defaultValue={user.user.address} readOnly={tabs.editAddress == false ? true : false} onChange={actions.handleChangeLogin} />
                                    </div>
                                    <div className={"form-group col-md-12 d-flex" + (tabs.editAddress == true ? " justify-content-end" : " justify-content-start")}>
                                        <button className={"btn btn-sm c-silver border border-dark text-dark" + (tabs.editAddress == true ? " d-none" : "")} onClick={e => handleEditAddress(e)}>Editar dirección</button>
                                        <button className={"btn btn-sm c-coffee text-white" + (tabs.editAddress == false ? " d-none" : "")} onClick={e => handleEditAddress(e)}>Cambiar dirección</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    }
                    {
                        tabs.tabs === "misFavoritos" &&
                        <div>
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
                    }
                    {
                        tabs.tabs === "misCompras" &&
                        <div>
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
                    }
                    {
                        tabs.tabs === "usersAdmin" &&
                        <div className="container">
                            <div className="d-flex justify-content-end align-items-baseline my-3">
                                <p className="mr-2">Ordenar por</p>
                                <select className="custom-select w-25" id="usersSortCombo" onChange={e => handleSort(e)}>
                                    <option value="1">Nombre (A...Z)</option>
                                    <option value="2">Nombre (Z...A)</option>
                                </select>
                                {/* <p className="mr-2">Mostrar</p>
                <select className="custom-select w-25" id="usersSortCombo2" onChange={e => handleIsAdmin(e)}>
                    <option value="all">Todos</option>
                    <option value="user">Usuarios</option>
                    <option value="admin">Administradores</option>
                </select> */}
                            </div>
                            <div>
                                <table className="table table-striped text-center">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Nombre</th>
                                            <th scope="col">Apellido</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Is Admin</th>
                                            <th scope="col">Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {!!store.users &&
                                            store.users.map((user, index) => {
                                                return (
                                                    <tr key={index} >
                                                        <th scope="row">{index + 1}</th>
                                                        <td>{user.name}</td>
                                                        <td>{user.last_name}</td>
                                                        <td>{user.email}</td>
                                                        <td>{user.role}</td>
                                                        <td>
                                                            {
                                                                user.role === "isUser" ?
                                                                    <button className="btn btn-success btn-sm mr-2" onClick={e => handleMakeAdmin(e, user.id)} >Admin <i class="fas fa-plus"></i></button>
                                                                    :
                                                                    <button className="btn btn-primary btn-sm mr-2" onClick={e => handleMakeAdmin(e, user.id)} >Admin <i class="fas fa-minus"></i></button>

                                                            }
                                                            <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#deleteUserModal" onClick={()=>{setTabs({...tabs, userID: user.id})}}>Eliminar</button>
                                                        </td>
                                                    </tr>
                                                )
                                            })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    }
                </section>
                <section>

                </section>
            </div>
        </>
    )
}

export default MyAccount;

// onClick={()=>actions.deleteUser(user.id)}