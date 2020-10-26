import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Context } from '../store/appContext';

const PayError = props => {
    const { store, actions } = useContext(Context);
    const history = useHistory();

    return (
        <div className="container py-5">
            <div className="row text-center py-5">
                <h1 className="py-5">Oops!</h1>
                <h2 className="pb-5">Parece que hubo un error al procesar tu pago, por favor intenta de nuevo...</h2>
                <Link to="/checkout" className="btn btn-lg c-coffee text-white">Volver</Link>
            </div>
        </div>
    )
}

export default PayError;