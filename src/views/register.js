import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Context } from '../store/appContext';

const Register = props => {
    const { store, actions } = useContext(Context);
    const history = useHistory();

    return (
        <div className="container">
            <div className="row">
                <form className="mx-auto mt-5" onSubmit={(e) => actions.register(e, history)}>
                    <h2 className="text-center mb-5">Crea tu cuenta</h2>
                    {
                        store.error !== null && (
                            <div className="alert alert-warning alert-dismissible fade show" role="alert">
                                <strong>Holy guacamole! </strong> 
                                {!!store.error.name && store.error.name}
                                {!!store.error.last_name && store.error.last_name}
                                {!!store.error.reg_password && store.error.reg_password}
                                {!!store.error.reg_email && store.error.reg_email}
                                {!!store.error.address && store.error.address}
                                {!!store.error.phone && store.error.phone}
                                {!!store.msg && store.msg} 
                                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        )
                    }
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="inputEmail4">Nombre</label>
                            <input type="text" value={store.name} name="name" className="form-control" id="inputEmail4" placeholder="Nombre" onChange={actions.handleChangeLogin} />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputPassword4">Apellido</label>
                            <input type="text" value={store.last_name} name="last_name" className="form-control" id="inputPassword4" placeholder="Apellido" onChange={actions.handleChangeLogin}  />
                        </div> 
                    </div>
                    <div className="form-group">
                        <label for="inputAddress">Email</label>
                        <input type="email" value={store.email} name="email" className="form-control" id="inputAddress" placeholder="Email"  onChange={actions.handleChangeLogin} />
                    </div>
                    <div className="form-group">
                        <label for="inputAddress" className="">Dirección</label>
                        <input type="text" value={store.address} name="address" className="form-control" id="inputAddress" placeholder=" Repita su email" onChange={actions.handleChangeLogin} />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="inputEmail4">Contraseña</label>
                            <input type="password" value={store.password} name="password" className="form-control" id="inputEmail4" placeholder="Contraseña" onChange={actions.handleChangeLogin} />
                        </div>
                        <div className="form-group col-md-6">
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