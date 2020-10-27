import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';
import { toast } from "react-toastify";

const AdminUsersLists = () => {
    const { store, actions } = useContext(Context);
    const [tabs, setTabs] = useState({
        index: 0,
        userID: null
    });

    const [brewing, setBrewing] = useState({
        sorting: "priceup",
        groundFilter: [],
        originFilter: [],
        pricefilterMin: 0,
        pricefilterMax: 99999
    });

    const [filters, setFilters] = useState({
        sorting: "nameup",
        role: ""
    });

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

    useEffect(() => {
        actions.getUsers(filters)
    }, [filters]);


    // sets apiURL from onChange in <select id="usersSortCombo"> 
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

    const notify = () => toast.success("¡Usuario eliminado con éxito!");

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
                            <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={() => { actions.deleteUser(tabs.userID, tabs.index); setTabs({ ...tabs, userID: null }); notify(); }} >Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>
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
        </>
    )
}

export default AdminUsersLists;