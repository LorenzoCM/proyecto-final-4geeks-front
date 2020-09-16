import React from 'react';

const Newsletter = props => {
    return (
        <div className="container">
            <div className="container mt-5 py-4 text-center">
                <div className="row">
                    <div className="col-md-12 col-sm-10 col-10 mx-auto suscribe-box">
                        <h4><b>SUSCRIBETE A NUESTRO NEWSLETTER</b></h4>
                        <p className="mt-3">Join our newsletter and be the first to hear about new releases, special offers and suscriber-exclusive discounts up to 50% off.</p>
                        <div class="input-group mb-3 suscribe mt-4  mx-auto">
                            <input type="text" class="form-control col-sm-8" placeholder="Ingrese su email" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <div class="input-group-append">
                                <span class="input-group-text" id="basic-addon2">Suscribirme</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter;