import React from 'react';

const AddProduct = (props) => {

    return (
        <>
            <div className="container">
                <form className="my-5">
                    {/*-- Text input--*/}
                    <div className="form-row">
                        <div className="form-group col-12 col-md-6 col-lg-3">
                            <label className="control-label small" for="product_sku">Product SKU</label>
                            <input id="product_sku" name="product_sku" placeholder="Product SKU" className="form-control input-md" required="" type="text" />
                        </div>
                        {/*-- Text input--*/}
                        <div className="form-group col-12 col-md-6 col-lg-3">
                            <label className="control-label small" for="product_brand">Product Brand</label>
                            <input id="product_brand" name="product_brand" placeholder="Product Brand" className="form-control input-md" required="" type="text" />
                        </div>
                        {/*!-- Select Basic --*/}
                        <div className="form-group col-12 col-md-6 col-lg-3">
                            <label className="control-label small" for="product_name">Product Name</label>
                            <input id="product_name" name="product_name" placeholder="Product Name" className="form-control input-md" required="" type="text" />
                        </div>
                        {/*-- Text input--*/}
                        <div className="form-group col-12 col-md-6 col-lg-3">
                            <label className="control-label small" for="product_presentation">Product Presentation</label>
                            <input id="product_presentation" name="product_presentation" placeholder="Product Presentation" className="form-control input-md" required="" type="text" />
                        </div>
                    </div>
                    {/*-- Text input--*/}
                    <div className="form-row">
                        <div className="form-group col-10 col-md-8 col-lg-4">
                            <label className="control-label small" for="product_price">Product Price</label>
                            <input id="product_price" name="product_price" placeholder="CLP $" className="form-control input-md" required="" type="text" />
                        </div>
                        {/*-- Text input --*/}
                        <div className="form-group col-2 col-md-4 col-lg-2">
                            <label className="control-label small" for="product_stock">Stock</label>
                            <input id="product_stock" name="product_stock" placeholder="Stock" className="form-control input-md" required="" type="text" />
                        </div>
                        {/*-- Text input--*/}
                        <div className="form-group col-6 col-md-6 col-lg-3">
                            <label className="control-label small" for="percentage_discount">Origin</label>
                            <input id="product_origin" name="product_origin" placeholder="Origin" className="form-control input-md" required="" type="text" />
                        </div>
                        {/*-- Text input--*/}
                        <div className="form-group col-6 col-md-6 col-lg-3">
                            <label className="control-label small" for="stock_alert"> Species</label>
                            <input id="product_species" name="product_species" placeholder="Species" className="form-control input-md" required="" type="text" />
                        </div>
                        {/*-- Text input--*/}
                        <div className="form-group col-6 col-md-4 col-lg-4">
                            <label className="control-label small" for="stock_alert">Ground</label>
                            <input id="product_ground" name="product_ground" placeholder="Ground" className="form-control input-md" required="" type="text" />
                        </div>
                        {/*-- Text input--*/}
                        <div className="form-group col-3 col-md-4 col-lg-4">
                            <label className="control-label small" for="stock_alert">Acidity</label>
                            <input id="product_acidity" name="product_acidity" placeholder="Acidity" className="form-control input-md" required="" type="text" />
                        </div>
                        {/*-- Text input--*/}
                        <div className="form-group col-3 col-md-4 col-lg-4">
                            <label className="control-label small" for="stock_alert">Roasting</label>
                            <input id="product_roasting" name="product_roasting" placeholder="Roasting" className="form-control input-md" required="" type="text" />
                        </div>
                    </div>
                    {/*-- Textarea --*/}
                    <div className="form-row">
                        <div className="form-group col-12 col-md-12 col-lg-8">
                            <label className="control-label small" for="product_description">Product Description</label>
                            <textarea className="form-control" id="product_description" name="product_description"></textarea>
                        </div>
                        {/*-- File Button --*/}
                        <div className="form-group col-12 col-md-12 col-lg-4">
                            <label className="control-label small" for="filebutton">product_image</label>
                            <input id="filebutton" name="filebutton" className="input-file" type="file" />
                        </div>
                    </div>
                    <hr/>
                    <div className="d-flex justify-content-end">
                        <button className="btn c-silver border border-dark text-dark">Reset</button>
                        <button className="btn c-coffee text-white ml-2">Agregar Producto</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddProduct;