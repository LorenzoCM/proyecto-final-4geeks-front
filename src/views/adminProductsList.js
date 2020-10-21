import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

const AdminProductsList = (tabs, setTabs) => {
    const { store, actions } = useContext(Context);

    const [brewing, setBrewing] = useState({
        sorting: "priceup",
        groundFilter: [],
        originFilter: [],
        pricefilterMin: 0,
        pricefilterMax: 99999
    });

    useEffect(() => {
        actions.getProductsFiltered(brewing)
    }, [brewing]);


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

    return (
        <div className="container-fluid">
            <div className="d-flex justify-content-end align-items-baseline my-3">
                <p className="mr-2">Ordenar por</p>
                <select className="custom-select w-25" id="usersSortCombo" onChange={e => handleSortProducts(e)}>
                    <option value="1">Precio (Ascendente)</option>
                    <option value="2">Precio (Descendente)</option>
                    <option value="3">Marca (A...Z)</option>
                    <option value="4">Marca (Z...A)</option>
                </select>
            </div>
            <table className="table table-striped text-center">
                <thead className="c-coffee text-white">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Producto</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Marca</th>
                        <th scope="col">Sku</th>
                        <th scope="col">Presentación</th>
                        <th scope="col">Imagen</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {!!store.products &&
                        store.products.map((product, index) => {
                            return (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{product.name}</td>
                                    <td>{(product.price).toLocaleString('en-US', { style: 'currency', currency: 'CLP', }) /* $2,500.00 */}</td>
                                    <td>{product.stock}</td>
                                    <td>{product.brand}</td>
                                    <td>{product.sku}</td>
                                    <td>{product.ground}<br />{product.presentation}</td>
                                    <td><img src={process.env.REACT_APP_URL_API + "products/coffee/" + product.image} alt="" className="border border-2 border-dark thumbnail" /></td>
                                    <td className="d-flex align-items-baseline">
                                        <Link to={`/admincoffee/editproduct/${product.id}`} className="btn btn-sm btn-dark ml-5" onClick={() => actions.setCurrentProduct(product)}>Editar</Link>
                                        <button className="btn btn-sm btn-danger ml-3" data-toggle="modal" data-target="#deleteProductModal" onClick={() => { setTabs({ ...tabs, productID: product.id, index: index }) }}>Eliminar</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <hr />
            <div className="d-flex justify-content-end">
                <Link to="/admincoffee/addProduct"><button className="btn c-coffee text-white mr-2">Crear Nuevo</button></Link>
            </div>
        </div>
    )
}

export default AdminProductsList;