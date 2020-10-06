import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../store/appContext';

const EditProduct = (props) => {
    const { store, actions } = useContext(Context);
    const {id} = useParams();
    
    
    useEffect(() => {
        actions.setImageToEdit();
        actions.getProductDetails(id);                      
      },[]); 

    return (
        <>
            <div className="container">
                <form className="my-5" onSubmit={(e) => actions.putProduct(e, store.productDetails.id)}>
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
                            <label className="control-label small" htmlFor="product_sku">Product SKU</label>
                            <input type="text" id="product_sku" defaultValue={store.productDetails.sku} name="sku" placeholder="Product Sku" className="form-control input-md" onChange={actions.handleChangeProduct} />
                        </div>
      
                        <div className="form-group col-12 col-md-6 col-lg-3">
                            <label className="control-label small" htmlFor="product_brand">Product Brand</label>
                            <input id="product_brand" defaultValue={store.productDetails.brand} name="brand" placeholder="Product Brand" className="form-control input-md" required="" type="text" onChange={actions.handleChangeProduct} />
                        </div>
              
                        <div className="form-group col-12 col-md-6 col-lg-3">
                            <label className="control-label small" htmlFor="product_name">Product Name</label>
                            <input id="product_name" defaultValue={store.productDetails.name} name="name" placeholder="Product Name" className="form-control input-md" required="" type="text" onChange={actions.handleChangeProduct} />
                        </div>
             
                        <div className="form-group col-12 col-md-6 col-lg-3">
                            <label className="control-label small" htmlFor="product_presentation">Product Presentation</label>
                            <input id="product_presentation" defaultValue={store.productDetails.presentation} name="presentation" placeholder="Product Presentation" className="form-control input-md" required="" type="text" onChange={actions.handleChangeProduct} />
                        </div>
                    </div>
               
                    <div className="form-row">
                        <div className="form-group col-10 col-md-8 col-lg-4">
                            <label className="control-label small" htmlFor="product_price">Product Price</label>
                            <input id="product_price" defaultValue={store.productDetails.price} name="price" placeholder="CLP $" className="form-control input-md" required="" type="number" onChange={actions.handleChangeProduct} />
                        </div>
                 
                        <div className="form-group col-2 col-md-4 col-lg-2">
                            <label className="control-label small" htmlFor="product_stock">Stock</label>
                            <input id="product_stock" defaultValue={store.productDetails.stock} name="stock" placeholder="Stock" className="form-control input-md" required="" type="number" onChange={actions.handleChangeProduct} />
                        </div>
                   
                        <div className="form-group col-6 col-md-6 col-lg-3">
                            <label className="control-label small" htmlFor="percentage_discount">Origin</label>
                            <input id="product_origin" defaultValue={store.productDetails.origin} name="origin" placeholder="Origin" className="form-control input-md" required="" type="text" onChange={actions.handleChangeProduct} />
                        </div>
                    
                        <div className="form-group col-6 col-md-6 col-lg-3">
                            <label className="control-label small" htmlFor="stock_alert"> Species</label>
                            <input id="product_species" defaultValue={store.productDetails.species} name="species" placeholder="Species" className="form-control input-md" required="" type="text" onChange={actions.handleChangeProduct} />
                        </div>
                
                        <div className="form-group col-6 col-md-4 col-lg-4">
                            <label className="control-label small" htmlFor="stock_alert">Ground</label>
                            <input id="product_ground" defaultValue={store.productDetails.ground} name="ground" placeholder="Ground" className="form-control input-md" required="" type="text" onChange={actions.handleChangeProduct} />
                        </div>
                        
                        <div className="form-group col-3 col-md-4 col-lg-4">
                            <label className="control-label small" htmlFor="stock_alert">Acidity</label>
                            <input id="product_acidity" defaultValue={store.productDetails.acitidy} name="acidity" placeholder="Acidity" className="form-control input-md" required="" type="number" onChange={actions.handleChangeProduct} />
                        </div>
                       
                        <div className="form-group col-3 col-md-4 col-lg-4">
                            <label className="control-label small" htmlFor="stock_alert">Roasting</label>
                            <input id="product_roasting" defaultValue={store.productDetails.roasting} name="roasting" placeholder="Roasting" className="form-control input-md" required="" type="number" onChange={actions.handleChangeProduct} />
                        </div>
                    </div>
                   
                    <div className="form-row">
                        <div className="form-group col-12 col-md-12 col-lg-8">
                            <label className="control-label small" htmlFor="product_description">Product Description</label>
                            <textarea className="form-control" defaultValue={store.productDetails.description} id="product_description" name="description" onChange={actions.handleChangeProduct}></textarea>
                        </div>
                        
                        <div className="form-group col-12 col-md-12 col-lg-4">
                            <label className="control-label small" htmlFor="filebutton">product_image</label>
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

export default EditProduct;