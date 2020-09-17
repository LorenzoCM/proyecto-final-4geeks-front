import React from 'react';

const Register = props => {
    return (
        <div className="container">
            <div className="row">
                <form className="mx-auto mt-5">
                    <h2 className="text-center mb-5">Crea tu cuenta</h2>
                    <div className="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputEmail4">Nombre</label>
                            <input type="text" className="form-control" id="inputEmail4" placeholder="Nombre" />
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputPassword4">Apellido</label>
                            <input type="text" className="form-control" id="inputPassword4" placeholder="Apellido" />
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="inputAddress">Email</label>
                        <input type="email" className="form-control" id="inputAddress" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <label for="inputAddress" className="">Repita su email</label>
                        <input type="email" className="form-control" id="inputAddress" placeholder=" Repita su email" />
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputEmail4">Contraseña</label>
                            <input type="password" className="form-control" id="inputEmail4" placeholder="Contraseña" />
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputPassword4">Repita su contraseña</label>
                            <input type="password" className="form-control" id="inputPassword4" placeholder="Repita su contraseña" />
                        </div>
                    </div>
                    <div className="text-center mt-4">
                        <button type="submit" className="btn btn-dark">Registrar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register;