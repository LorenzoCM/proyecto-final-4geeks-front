import React from 'react';

const Register = props => {
    return (
        <div className="container">
            <div className="row">
                <form className="col-md-5 mx-auto mt-5">
                    <h2 className="text-center mb-5">Login</h2>
                    <div class="form-group">
                        <label for="inputAddress">Email</label>
                        <input type="email" className="form-control" id="inputAddress" placeholder="Email" />
                    </div>
                    <div class="form-group">
                        <label for="inputEmail4">Contraseña</label>
                        <input type="password" className="form-control" id="inputEmail4" placeholder="Contraseña" />
                    </div>
                    <div className="text-center mt-5">
                        <button type="submit" className="btn btn-dark">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register;