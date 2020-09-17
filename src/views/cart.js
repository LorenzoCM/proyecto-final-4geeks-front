import React from 'react';

const Cart = props => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="text-center mt-5">Shopping Cart</h2>
                    {/* Table div */}
                    <div className="table-responsive mt-5">
                        <table className="table table-striped text-center">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Product</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Total</th>
                                    <th></th>                                    
                                </tr>
                            </thead>
                            <tbody>
                                <tr>                                    
                                    <th scope="row">1</th>
                                    <td>Café Satán</td>
                                    <td>$9990</td>
                                    <td>2</td>
                                    <td>$19980</td>
                                    <td><i className="fas fa-trash"></i></td>                                    
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* Instructions to seller div. */}
                    <div className="instructions-seller">
                        <div className="form-row mt-5">
                            <div class="form-group col-md-7 mx-auto">
                                <label for="exampleFormControlTextarea1">Instrucciones especiales al vendedor:</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" width="100%" rows="3"></textarea>
                            </div>
                        </div>
                    </div>
                    {/* Sub-Total, shipping, taxes and checkout button. */}
                    <div className="row d-flex justify-content-end">
                        <div className="table-responsive col-md-4 mt-5">
                            <table className="table text-center">
                                <tbody>
                                    <tr>
                                        <th scope="row">Sub-Total:</th>
                                        <td>$19.980</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">IVA y Envío:</th>
                                        <td>$0</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">A pagar:</th>
                                        <td>$19980</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {/* Bottom Buttons Area */}
                    <div className="row d-flex mt-3">
                        <div className="col-md-8 ml-5">
                            <button className="btn btn-success">Continue Shopping</button>
                        </div>
                        <div  className="ml-2">
                            <button className="btn btn-dark mr-5">Update Cart</button>
                            <button className="btn btn-dark ml-5">Check Out</button>
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;