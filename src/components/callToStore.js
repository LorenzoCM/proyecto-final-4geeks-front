import React from 'react';
import { Link } from 'react-router-dom';

const StoreCall = (props) => {
    return (
        <section className="container-fluid mx-0 px-0 mt-n5">
            <div className="jumbotron jumbotron-fluid px-3 bg-white">
                <div className="row align-items-between">
                    <div className="col-12 col-md-4 py-5 order-2 order-md-1">
                        <h2>Bienvenido a la nueva experiencia en café</h2>
                        <p>Descubre una nueva forma de disfrutar el café y todas las experiencias que este te puede brindar</p>
                        <Link to="/products" data-scroll="" className="btn c-coffee text-white text-uppercase d-inline-flex align-items-center">
                            Explorar productos<i className="fas fa-angle-right fa-2x ml-2"></i>
                        </Link>
                    </div>
                    <div className="col-12 col-md-8 order-1 order-md-2">
                        <img src="https://www.thespruceeats.com/thmb/4Fc1TQevV99QOje5ginESW999oA=/1732x1155/filters:fill(auto,1)/Stocksy_txpe027fe14byV200_Medium_586102-bde5f70e4d2b4bae9ae2f50f5f575b34.jpg" alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StoreCall;