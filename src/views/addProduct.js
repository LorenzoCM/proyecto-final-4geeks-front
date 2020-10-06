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
                            <label className="control-label small" for="product_sku">Product SKU</label>
                            <input type="text" id="product_sku" value={store.productSku} name="productSku" placeholder="Product Sku" className="form-control input-md" onChange={actions.handleChangeLogin} />
                        </div>
      
                        <div className="form-group col-12 col-md-6 col-lg-3">
                            <label className="control-label small" for="product_brand">Product Brand</label>
                            <input id="product_brand" value={store.productBrand} name="productBrand" placeholder="Product Brand" className="form-control input-md" required="" type="text" onChange={actions.handleChangeLogin} />
                        </div>
              
                        <div className="form-group col-12 col-md-6 col-lg-3">
                            <label className="control-label small" for="product_name">Product Name</label>
                            <input id="product_name" value={store.productName} name="productName" placeholder="Product Name" className="form-control input-md" required="" type="text" onChange={actions.handleChangeLogin} />
                        </div>
             
                        <div className="form-group col-12 col-md-6 col-lg-3">
                            <label className="control-label small" for="product_presentation">Product Presentation</label>
                            <input id="product_presentation" value={store.productPresentation} name="productPresentation" placeholder="Product Presentation" className="form-control input-md" required="" type="text" onChange={actions.handleChangeLogin} />
                        </div>
                    </div>
               
                    <div className="form-row">
                        <div className="form-group col-10 col-md-8 col-lg-4">
                            <label className="control-label small" for="product_price">Product Price</label>
                            <input id="product_price" value={store.productPrice} name="productPrice" placeholder="CLP $" className="form-control input-md" required="" type="number" onChange={actions.handleChangeLogin} />
                        </div>
                 
                        <div className="form-group col-2 col-md-4 col-lg-2">
                            <label className="control-label small" for="product_stock">Stock</label>
                            <input id="product_stock" value={store.stock} name="stock" placeholder="Stock" className="form-control input-md" required="" type="number" onChange={actions.handleChangeLogin} />
                        </div>
                   
                        <div className="form-group col-6 col-md-6 col-lg-3">
                            <label className="control-label small" for="percentage_discount">Origin</label>
                            <input id="product_origin" value={store.origin} name="origin" placeholder="Origin" className="form-control input-md" required="" type="text" onChange={actions.handleChangeLogin} />
                        </div>
                    
                        <div className="form-group col-6 col-md-6 col-lg-3">
                            <label className="control-label small" for="stock_alert"> Species</label>
                            <input id="product_species" value={store.species} name="species" placeholder="Species" className="form-control input-md" required="" type="text" onChange={actions.handleChangeLogin} />
                        </div>
                
                        <div className="form-group col-6 col-md-4 col-lg-4">
                            <label className="control-label small" for="stock_alert">Ground</label>
                            <input id="product_ground" value={store.ground} name="ground" placeholder="Ground" className="form-control input-md" required="" type="text" onChange={actions.handleChangeLogin} />
                        </div>
                        
                        <div className="form-group col-3 col-md-4 col-lg-4">
                            <label className="control-label small" for="stock_alert">Acidity</label>
                            <input id="product_acidity" value={store.acitidy} name="acidity" placeholder="Acidity" className="form-control input-md" required="" type="number" onChange={actions.handleChangeLogin} />
                        </div>
                       
                        <div className="form-group col-3 col-md-4 col-lg-4">
                            <label className="control-label small" for="stock_alert">Roasting</label>
                            <input id="product_roasting" value={store.roasting} name="roasting" placeholder="Roasting" className="form-control input-md" required="" type="number" onChange={actions.handleChangeLogin} />
                        </div>
                    </div>
                   
                    <div className="form-row">
                        <div className="form-group col-12 col-md-12 col-lg-8">
                            <label className="control-label small" for="product_description">Product Description</label>
                            <textarea className="form-control" value={store.productDescription} id="product_description" name="productDescription" onChange={actions.handleChangeLogin}></textarea>
                        </div>
                        
                        <div className="form-group col-12 col-md-12 col-lg-4">
                            <label className="control-label small" for="filebutton">product_image</label>
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