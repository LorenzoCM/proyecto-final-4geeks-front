import React, { useContext, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Context } from '../store/appContext';

const AdminUsersLists = () => {
    const { store, actions } = useContext(Context);

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

    useEffect(() => {
        actions.getUsers(filters)
    }, [filters]);

    return (
        <>
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
                            </tr>
                        </thead>
                        <tbody>
                            {!!store.users &&
                                store.users.map((user, index) => {
                                    return (
                                        <tr>
                                            <th scope="row">{index + 1}</th>
                                            <td>{user.name}</td>
                                            <td>{user.last_name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.role}</td>
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