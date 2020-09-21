import React, { useContext } from 'react';
import { Context } from '../store/appContext';

const Register = props => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container">
            <div className="row">
                <form className="mx-auto mt-5" onSubmit={actions.register}>
                    <h2 className="text-center mb-5">Crea tu cuenta</h2>
                    <div className="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputEmail4">Nombre</label>
                            <input type="text" value={store.name} name="name" className="form-control" id="inputEmail4" placeholder="Nombre" onChange={actions.handleChangeLogin} />
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputPassword4">Apellido</label>
                            <input type="text" value={store.last_name} name="last_name" className="form-control" id="inputPassword4" placeholder="Apellido" onChange={actions.handleChangeLogin}  />
                        </div> 
                    </div>
                    <div class="form-group">
                        <label for="inputAddress">Email</label>
                        <input type="email" value={store.email} name="email" className="form-control" id="inputAddress" placeholder="Email"  onChange={actions.handleChangeLogin} />
                    </div>
                    <div className="form-group">
                        <label for="inputAddress" className="">Dirección</label>
                        <input type="text" value={store.address} name="address" className="form-control" id="inputAddress" placeholder=" Repita su email" onChange={actions.handleChangeLogin} />
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputEmail4">Contraseña</label>
                            <input type="password" value={store.password} name="password" className="form-control" id="inputEmail4" placeholder="Contraseña" onChange={actions.handleChangeLogin} />
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputPassword4">Teléfono</label>
                            <input type="text" value={store.phone} name="phone" className="form-control" id="inputPassword4" placeholder="Repita su contraseña" onChange={actions.handleChangeLogin} />
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