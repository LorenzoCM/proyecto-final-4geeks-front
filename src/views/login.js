import React, { useContext } from 'react';
import { Context } from '../store/appContext';

const Register = props => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container">
            <div className="row">
                <form className="col-md-5 mx-auto mt-5" onSubmit={actions.login}>
                    <h2 className="text-center mb-5">Login</h2>
                    {
                        store.error !== null && (
                            <div className="alert alert-warning alert-dismissible fade show" role="alert">
                                <strong>Holy guacamole! </strong> 
                                {!!store.error.email && store.error.email}
                                {!!store.error.password && store.error.password}
                                {!!store.error.not_user && store.error.not_user}
                                {!!store.error.not_password && store.error.not_password} 
                                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        )

                    }
                    <div class="form-group">
                        <label for="inputAddress">Email</label>
                        <input type="email" name="email" defaultValue={store.email} className={"form-control"} id="inputAddress" placeholder="Email" onChange={actions.handleChangeLogin} />
                    </div>
                    <div class="form-group">
                        <label for="inputEmail4">Contraseña</label>
                        <input type="password" name="password" defaultValue={store.password} className="form-control" id="inputEmail4" placeholder="Contraseña" onChange={actions.handleChangeLogin} />
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