import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Context } from '../store/appContext';

const Register = props => {
    const { store, actions } = useContext(Context);
    const history = useHistory();

    return (
        <div className="container">
            <div className="row">
                <form className="col-md-5 mx-auto mt-5" onSubmit={(e) => actions.login(e, history)}>
                    <h2 className="text-center mb-5">Login</h2>
                    {
                        store.error !== null && (
                            <div className="alert alert-warning alert-dismissible fade show" role="alert">
                                <strong>Holy guacamole! </strong> 
                                {!!store.error.email && store.error.email}
                                {!!store.error.password && store.error.password}
                                {!!store.error.not_user && store.error.not_user}
                                {!!store.error.not_password && store.error.not_password}
                                {!!store.msg && store.msg} 
                                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        )

                    }
                    <div className="form-group">
                        <label htmlFor="inputAddress">Email</label>
                        <input type="email" name="email" defaultValue={store.email} className={"form-control"} id="inputAddress" placeholder="Email" onChange={actions.handleChangeLogin} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputEmail4">Contraseña</label>
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