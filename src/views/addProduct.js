import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Context } from '../store/appContext';

const AddProduct = (props) => {
    const { store, actions } = useContext(Context);

    return (
        <>
            <div className="container">
                <form className="my-5" onSubmit={(e) => actions.addProduct(e)}>
                    {
                        store.error !== null && (
                            <div className="alert alert-warning alert-dismissible fade show" role="alert">
                                <strong>Holy guacamole! </strong>
                                {!!store.error.sku && store.error.sku}
                                {!!store.error.price && store.error.price}
                                {!!store.error.brand && store.error.brand}
                                {!!store.error.name && store.error.name}
                                {!!store.error.presentation && store.error.presentation}
                                {!!store.error.stock && store.error.stock}
                                {!!store.error.origin && store.error.origin}
                                {!!store.error.species && store.error.species}
                                {!!store.error.ground && store.error.ground}
                                {!!store.error.acidity && store.error.acidity}
                                {!!store.error.roasting && store.error.roasting}
                                {!!store.error.description && store.error.description} 
                                {!!store.error.image && store.error.image}
                                {!!store.error.images && store.error.images}
                                {!!store.error.filename && store.error.filename}
                                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        )

                    }

                    <div className="form-row">
                        <div className="form-group col-12 col-md-6 col-lg-3">
                            <label className="control-label small" htmlFor="product_sku">SKU</label>
                            <input type="text" id="product_sku" value={store.productSku} name="productSku" placeholder="Product Sku" className="form-control input-md" onChange={actions.handleChangeLogin} />
                        </div>

                        <div className="form-group col-12 col-md-6 col-lg-3">
                            <label className="control-label small" htmlFor="product_brand">Marca</label>
                            <input id="product_brand" value={store.productBrand} name="productBrand" placeholder="Product Brand" className="form-control input-md" required="" type="text" onChange={actions.handleChangeLogin} />
                        </div>

                        <div className="form-group col-12 col-md-6 col-lg-3">
                            <label className="control-label small" htmlFor="product_name">Nombre Producto</label>
                            <input id="product_name" value={store.productName} name="productName" placeholder="Product Name" className="form-control input-md" required="" type="text" onChange={actions.handleChangeLogin} />
                        </div>

                        <div className="form-group col-12 col-md-6 col-lg-3">
                            <label className="control-label small" htmlFor="product_presentation">Presentación</label>
                            <input id="product_presentation" value={store.productPresentation} name="productPresentation" placeholder="Product Presentation" className="form-control input-md" required="" type="text" onChange={actions.handleChangeLogin} />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-10 col-md-8 col-lg-4">
                            <label className="control-label small" htmlFor="product_price">Precio</label>
                            <input id="product_price" value={store.productPrice} name="productPrice" placeholder="CLP $" className="form-control input-md" required="" type="number" onChange={actions.handleChangeLogin} />
                        </div>

                        <div className="form-group col-2 col-md-4 col-lg-2">
                            <label className="control-label small" htmlFor="product_stock">Stock</label>
                            <input id="product_stock" value={store.stock} name="stock" placeholder="Stock" className="form-control input-md" required="" type="number" onChange={actions.handleChangeLogin} />
                        </div>

                        <div className="form-group col-6 col-md-6 col-lg-3">
                            <label className="control-label small" htmlFor="percentage_discount">Origen</label>
                            <input id="product_origin" value={store.origin} name="origin" placeholder="Origin" className="form-control input-md" required="" type="text" onChange={actions.handleChangeLogin} />
                        </div>

                        <div className="form-group col-6 col-md-6 col-lg-3">
                            <label className="control-label small" htmlFor="stock_alert">Especie</label>
                            <input id="product_species" value={store.species} name="species" placeholder="Species" className="form-control input-md" required="" type="text" onChange={actions.handleChangeLogin} />
                        </div>

                        <div className="form-group col-6 col-md-4 col-lg-4">
                            <label className="control-label small" htmlFor="stock_alert">Formato</label>
                            <select className="custom-select" id="product_ground" defaultValue="Grano" name="ground" onChange={actions.handleChangeLogin}>
                                <option value="Grano">Grano Entero</option>
                                <option value="Molido">Molido</option>
                                <option value="Cápsulas">Cápsulas</option>
                            </select>
                        </div>

                        <div className="form-group col-3 col-md-4 col-lg-4">
                            <label className="control-label small" htmlFor="stock_alert">Acidez</label>                            
                            <select className="custom-select" id="product_acidity" defaultValue="1" name="acidity" onChange={actions.handleChangeLogin}>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                            </select>
                        </div>

                        <div className="form-group col-3 col-md-4 col-lg-4">
                            <label className="control-label small" htmlFor="stock_alert">Tostado</label>
                            <select className="custom-select" id="product_roasting" defaultValue="95" name="roasting" onChange={actions.handleChangeLogin}>
                                <option value="95">95</option>
                                <option value="85">85</option>
                                <option value="75">75</option>
                                <option value="65">65</option>
                                <option value="55">55</option>
                                <option value="45">45</option>
                                <option value="35">35</option>
                                <option value="25">25</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-12 col-md-12 col-lg-8">
                            <label className="control-label small" htmlFor="product_description">Descripción</label>
                            <textarea className="form-control" value={store.productDescription} id="product_description" name="productDescription" onChange={actions.handleChangeLogin}></textarea>
                        </div>

                        <div className="form-group col-12 col-md-12 col-lg-4">
                            <label className="control-label small" htmlFor="filebutton">Imagen</label>
                            <input id="file" name="productImage" className="input-file" type="file" onChange={actions.handleChangeFiles} />
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="submit" className="btn c-coffee text-white ml-2">Agregar Producto</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddProduct;