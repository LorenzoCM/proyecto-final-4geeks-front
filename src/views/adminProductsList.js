import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../store/appContext';

const AdminProductsList = props => {
    const { store, actions } = useContext(Context);

    const [brewing, setBrewing] = useState({
        sorting: "priceup",
        groundFilter: [],
        originFilter: [],
        pricefilterMin: 0,
        pricefilterMax: 99999
    });

    useEffect(() => {
        // fetchs products based on sorting order        
        actions.getProductsFiltered(brewing)
        console.log(brewing)
    }, [brewing]);


    // sets apiURL from onChange in <select id="sortCombo"> 
    const handleSort = (e) => {
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
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="text-center mt-5">Product List Administration</h2>
                    {/* Table div */}
                    <div className="d-flex justify-content-end align-items-baseline mt-n2 mb-n3">
                        <p className="mr-2">Ordenar por</p>
                        <select className="custom-select w-25" id="usersSortCombo" onChange={e => handleSort(e)}>
                            <option value="1">Precio (Ascendente)</option>
                            <option value="2">Precio (Descendente)</option>
                            <option value="3">Marca (A...Z)</option>
                            <option value="4">Marca (Z...A)</option>
                        </select>
                    </div>
                    <div className="table-responsive mt-5">
                        <table className="table table-striped text-center">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Product</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Stock</th>
                                    <th scope="col">Brand</th>
                                    <th scope="col">sku</th>
                                    <th scope="col">Presentation</th>
                                    <th scope="col">Image</th>
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
                                                <td>{product.presentation}</td>
                                                <td>{product.image}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminProductsList;