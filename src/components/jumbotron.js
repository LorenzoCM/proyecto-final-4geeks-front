import React from 'react';

const Jumbotron = props => {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img width="100%" height="500px" src="https://s1.eestatic.com/2017/02/13/cocinillas/Cocinillas_193495389_116293002_1024x576.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img width="100%" height="500px" src="https://dam.cocinafacil.com.mx/wp-content/uploads/2018/08/beneficios-de-tomar-cafe.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img width="100%" height="500px" src="https://ep01.epimg.net/elcomidista/imagenes/2017/09/27/articulo/1506522721_155894_1506523041_media_normal.jpg" className="d-block w-100" alt="..." />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    ) 
}

export default Jumbotron;