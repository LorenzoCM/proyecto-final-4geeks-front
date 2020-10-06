import React from 'react';
import { Link } from 'react-router-dom';

const StoreCall = (props) => {
    return (
        <section className="mb-6 mb-lg-7" id="content">
            <div className="container"><div className="row align-items-center">
                <div className="col-lg-4 pr-lg-2 py-10 z-index-1 aos-init aos-animate" data-aos="fade-right" data-aos-delay="300">
                    <h2 className="display-3 text-nowrap">Bienvenido<br/>a la nueva<br/>experiencia<br/>en café</h2>
                    <p className="mb-6">Square, a fully flexible Bootstrap theme that utilises timeless Swiss influenced graphic design and typography to create beautiful responsive websites</p>
                    <Link to="/products" data-scroll="" className="btn c-coffee text-white text-uppercase d-inline-flex align-items-center">
                        Explorar productos<i class="fas fa-angle-right fa-2x ml-2"></i>
                    </Link>
                </div>
                <div className="col-lg-8 aos-init aos-animate" data-aos="fade-left">
                    <div className="img-shifted shift-right vh-100 py-13 py-lg-15">
                        <div className="bg-image bg-cover overlay overlay-white-gradient-top-90 overlay-20">
                            <div id="jarallax-container-0">
                                <div className="storeCallImg">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default StoreCall;