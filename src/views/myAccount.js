import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';
import AdminProductsList from '../views/adminProductsList';

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
        userID: null,
        index: 0,
        password: '',
        productID: null
    });
    const [filters, setFilters] = useState({
        sorting: "nameup",
        role: ""
    });

    const [brewing, setBrewing] = useState({
        sorting: "priceup",
        groundFilter: [],
        originFilter: [],
        pricefilterMin: 0,
        pricefilterMax: 99999
    });

    // sets apiURL from onChange in <select id="sortCombo"> 
    const handleSortProducts = e => {
        if (e.target.value == 2) {
            setBrewing({ ...brewing, sorting: "pricedown" });
        }
        else if (e.target.value == 3) {
            setBrewing({ ...brewing, sorting: "brandup" })
        }
        else if (e.target.value == 4) {
            setBrewing({ ...brewing, sorting: "branddown" })
        }
        else {
            setBrewing({ ...brewing, sorting: "priceup" })
        }
    };

    const handleSortUsers = e => {
        if (e.target.value == 2) {
            setFilters({ ...filters, sorting: "namedown" });
        }
        else {
            setFilters({ ...filters, sorting: "nameup" })
        }
    };

    const handleIsAdmin = (e) => {
        if (e.target.value == "user") {
            setFilters({ ...filters, role: "isUser" });
        } else if (e.target.value == "admin") {
            setFilters({ ...filters, role: "isAdmin" })
        } else {
            setFilters({ ...filters, role: "" })
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

    const handleUserPasswordEdit = (e) => {
        e.preventDefault();
        if (e.target.value === tabs.password && e.target.value !== '') {
            let password = e.target.value;
            actions.storePassword(password);
        }
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
        actions.getProductsFiltered(brewing)
    }, [brewing]);

    useEffect(() => {
        actions.getUsers(filters)
    }, [filters]);

    return (
        <>
            <div className="modal fade" id="deleteUserModal" tabIndex="-1" aria-labelledby="deleteUserModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="deleteUserModalLabel">Eliminar Usuario</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">Estás seguro?</div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Volver</button>
                            <button type="button" className="btn btn-danger" onClick={() => { actions.deleteUser(tabs.userID, tabs.index); setTabs({ ...tabs, userID: null }) }} >Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="deleteProductModal" tabIndex="-1" aria-labelledby="deleteUserModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="deleteUserModalLabel">Eliminar Usuario</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">Estás seguro?</div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Volver</button>
                            <button type="button" className="btn btn-danger" onClick={() => { actions.deleteProducts(tabs.productID, tabs.index); setTabs({ ...tabs, productID: null }) }} >Eliminar</button>
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
                    {/* <li className="nav-item">
                        <a className={"nav-link" + (tabs.tabs === "misFavoritos" ? " active" : "")} onClick={() => {
                            setTabs({
                                ...tabs,
                                tabs: "misFavoritos"
                            })
                        }} href="#">Mis favoritos</a>
                    </li> */}
                    {/* <li className="nav-item">
                        <a className={"nav-link" + (tabs.tabs === "misCompras" ? " active" : "")} onClick={() => {
                            setTabs({
                                ...tabs,
                                tabs: "misCompras"
                            })
                        }} href="#">Mis compras</a>
                    </li> */}
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
                        !!store.currentUser &&
                        tabs.tabs === "misDatos" &&
                        <div>
                            <form >
                                <div className="d-flex justify-content-between align-items-baseline">
                                    <h5 className="mt-5 mb-3">Mi cuenta</h5 >
                                    {
                                        tabs.editData == false ?
                                            <button className="btn c-accent text-white" onClick={e => handleEditData(e)}>Editar mis datos</button>
                                            :
                                            <button className="btn c-coffee text-white" onClick={e => actions.editCurrentUser(e, store.currentUser.user.id)}>Cambiar mis datos</button>
                                    }
                                </div>
                                {
                                    store.error !== null && (
                                        <div className="alert alert-warning alert-dismissible fade show" role="alert">
                                            <strong>Holy guacamole! </strong>
                                            {!!store.error.name && store.error.name}
                                            {!!store.error.last_name && store.error.last_name}
                                            {!!store.error.reg_email && store.error.reg_email}
                                            {!!store.error.address && store.error.address}
                                            {!!store.error.phone && store.error.phone}
                                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                    )
                                }
                                {
                                    store.msg !== null && (
                                        <div className="alert alert-warning alert-dismissible fade show" role="alert">
                                            <strong>Holy guacamole! </strong>
                                            {!!store.msg && store.msg}
                                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                    )
                                }
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="nombrecuenta">Nombre</label>
                                        <input type="text" className="form-control" name="name" id="nombrecuenta" defaultValue={!!store.currentUser && store.currentUser.user.name} readOnly={tabs.editData == false ? true : false} onChange={actions.handleChangeUser} />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="apellidocuenta">Apellido</label>
                                        <input type="text" className="form-control" name="last_name" id="apellidocuenta" defaultValue={!!store.currentUser && store.currentUser.user.last_name} readOnly={tabs.editData == false ? true : false} onChange={actions.handleChangeUser} />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="emailcuenta">Email</label>
                                        <input type="email" className="form-control" name="email" id="emailcuenta" defaultValue={!!store.currentUser && store.currentUser.user.email} readOnly={tabs.editData == false ? true : false} onChange={actions.handleChangeUser} />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="telefonocuenta">Teléfono</label>
                                        <input type="phone" className="form-control" name="phone" id="telefonocuenta" defaultValue={!!store.currentUser && store.currentUser.user.phone} readOnly={tabs.editData == false ? true : false} onChange={actions.handleChangeUser} />
                                    </div>
                                    <div className="form-group col-md-12">
                                        <label htmlFor="inputAddress">Address</label>
                                        <input type="text" className="form-control" name="address" id="inputAddress" defaultValue={!!store.currentUser && store.currentUser.user.address} readOnly={tabs.editData == false ? true : false} onChange={actions.handleChangeUser} />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-4">
                                        {
                                            tabs.editPassword == true && !tabs.passwordIsValidated &&
                                            <>
                                                <label htmlFor="passwordcuenta">Password Actual</label>
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
                                                    <label htmlFor="nuevopasswordcuenta" >Nuevo Password</label>
                                                    <input type="password" className="form-control" id="nuevopasswordcuenta" readOnly={tabs.passwordIsValidated == false ? true : false} onChange={e => setTabs({ ...tabs, password: e.target.value })} />
                                                </div>
                                                <div className="form-group col-md-4">
                                                    <label htmlFor="nuevopasswordcuentaV" >Repite tu nuevo Password</label>
                                                    <input type="password" className="form-control" id="nuevopasswordcuentaV" readOnly={tabs.passwordIsValidated == false ? true : false} onChange={e => handleUserPasswordEdit(e)} />
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
                                                <button className="btn btn-sm c-coffee text-white" onClick={e => handleUserPutFromData(e)}>Cambiar Contraseña</button>
                                        }
                                    </div>
                                </div>
                            </form>
                        </div>
                    }
                    {
                        tabs.tabs === "misFavoritos" &&
                        <div className="card-deck d-flex my-5 overflow-auto">
                            {
                                !!store.products &&
                                store.products.map((product, index) => {
                                    return (
                                        <div className="card-thumbnail mt-2" key={index}>
                                            <div className="card border border-2 border-dark rounded-0">
                                                <img src={process.env.REACT_APP_URL_API + "products/coffee/" + product.image} className="card-img-top img-fluid rounded-0" alt="..." />
                                                <div className="card-body border-top border-2 border-dark py-2 px-3" >
                                                    <h6 className="card-title">{product.name}</h6>
                                                    <p className="card-text my-0">{product.brand}</p>
                                                    <p className="card-text my-0">{product.origin}</p>
                                                    <p className="card-text my-0">{product.price}</p>
                                                    <div className="d-flex align-items-baseline justify-content-between">
                                                        <Link to={`/products/${product.id}`} className="btn btn-sm c-coffee text-white mt-1">Ver más</Link>
                                                        <div className="d-flex justify-content-center mt-3 btn-group" role="group">
                                                            <button className="btn btn-sm c-accent" onClick={() => actions.cartProducts(product)}><i className="fas fa-cart-plus"></i></button>
                                                            <select className="btn btn-sm border-accent" id="cartCombo">
                                                                <option value="1">1</option>
                                                                <option value="2">2</option>
                                                                <option value="3">3</option>
                                                                <option value="4">4</option>
                                                                <option value="5">5</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    }
                    {
                        tabs.tabs === "misCompras" &&
                        <div>
                            <form>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputEmail4">pú</label>
                                        <input type="email" className="form-control" id="inputEmail4" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputPassword4">Password</label>
                                        <input type="password" className="form-control" id="inputPassword4" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputAddress">Address</label>
                                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputAddress2">Address 2</label>
                                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputCity">City</label>
                                        <input type="text" className="form-control" id="inputCity" />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label htmlFor="inputState">State</label>
                                        <select id="inputState" className="form-control">
                                            <option selected>Choose...</option>
                                            <option>...</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-2">
                                        <label htmlFor="inputZip">Zip</label>
                                        <input type="text" className="form-control" id="inputZip" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                                        <label className="form-check-label" htmlFor="gridCheck">
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
                                <p className="mr-2">Mostrar</p>
                                <select className="custom-select w-25 mr-3" id="usersSortCombo2" onChange={e => handleIsAdmin(e)}>
                                    <option value="all">Todos</option>
                                    <option value="user">Usuarios</option>
                                    <option value="admin">Administradores</option>
                                </select>
                                <p className="mr-2">Ordenar por</p>
                                <select className="custom-select w-25" id="usersSortCombo" onChange={e => handleSortUsers(e)}>
                                    <option value="1">Nombre (A...Z)</option>
                                    <option value="2">Nombre (Z...A)</option>
                                </select>
                            </div>
                            <div>
                                <table className="table table-striped text-center">
                                    <thead className="c-coffee text-white">
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
                                                                    <button className="btn btn-sm btn-dark mr-1" onClick={e => handleMakeAdmin(e, user.id)} >Admin <i className="fas fa-plus"></i></button>
                                                                    :
                                                                    <button className="btn btn-sm btn-secondary mr-1" onClick={e => handleMakeAdmin(e, user.id)} >Admin <i className="fas fa-minus"></i></button>

                                                            }
                                                            <button type="button" className="btn btn-sm c-danger text-white" data-toggle="modal" data-target="#deleteUserModal" onClick={() => { setTabs({ ...tabs, userID: user.id, index: index }) }}>Eliminar</button>
                                                        </td>
                                                    </tr>
                                                )
                                            })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    }
                    {
                        tabs.tabs === "productosAdmin" &&
                        <AdminProductsList tabs={tabs} setTabs={setTabs} />
                    }

                </section>
            </div>
        </>
    )
}

export default MyAccount;

// below is the original product list code vvvv
// (<div className="container">
//     <div className="d-flex justify-content-end align-items-baseline my-3">
//         <p className="mr-2">Ordenar por</p>
//         <select className="custom-select w-25" id="usersSortCombo" onChange={e => handleSortProducts(e)}>
//             <option value="1">Precio (Ascendente)</option>
//             <option value="2">Precio (Descendente)</option>
//             <option value="3">Marca (A...Z)</option>
//             <option value="4">Marca (Z...A)</option>
//         </select>
//     </div>
//     <table className="table table-striped text-center">
//         <thead className="c-coffee text-white">
//             <tr>
//                 <th scope="col">#</th>
//                 <th scope="col">Producto</th>
//                 <th scope="col">Precio</th>
//                 <th scope="col">Cantidad</th>
//                 <th scope="col">Marca</th>
//                 <th scope="col">Sku</th>
//                 <th scope="col">Presentación</th>
//                 <th scope="col">Imagen</th>
//                 <th scope="col">Acciones</th>
//             </tr>
//         </thead>
//         <tbody>
//             {!!store.products &&
//                 store.products.map((product, index) => {
//                     return (
//                         <tr>
//                             <th scope="row">{index + 1}</th>
//                             <td>{product.name}</td>
//                             <td>{(product.price).toLocaleString('en-US', { style: 'currency', currency: 'CLP', }) /* $2,500.00 */}</td>
//                             <td>{product.stock}</td>
//                             <td>{product.brand}</td>
//                             <td>{product.sku}</td>
//                             <td>{product.ground}<br />{product.presentation}</td>
//                             <td><img src={process.env.REACT_APP_URL_API + "products/coffee/" + product.image} alt="" className="border border-2 border-dark thumbnail" /></td>
//                             <td className="d-flex align-items-baseline">
//                                 <Link to={`/admincoffee/editproduct/${product.id}`} className="btn btn-sm btn-dark ml-5" onClick={() => actions.setCurrentProduct(product)}>Editar</Link>
//                                 <button className="btn btn-sm btn-danger ml-3" data-toggle="modal" data-target="#deleteProductModal" onClick={() => { setTabs({ ...tabs, productID: product.id, index: index }) }}>Eliminar</button>
//                             </td>
//                         </tr>
//                     )
//                 })
//             }
//         </tbody>
//     </table>
//     <hr />
//     <div className="d-flex justify-content-end">
//         <Link to="/admincoffee/addProduct"><button className="btn c-coffee text-white mr-2">Crear Nuevo</button></Link>
//     </div>
// </div>)