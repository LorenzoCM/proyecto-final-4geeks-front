import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Context } from '../store/appContext';

const Success = props => {
    const { store, actions } = useContext(Context);
    const history = useHistory();

    return (
        <div className="container py-5">
            <div className="row text-center py-5">
                <h1 className="py-5">Felicidades!</h1>
                <h2 className="pb-5">Tu pago fue procesado con éxito, lo que significa que tu café llegará muy pronto!</h2>
                <Link to="/products" className="btn btn-lg c-coffee text-white">Volver a la tienda</Link>
            </div>
        </div>
    )
}

export default Success;