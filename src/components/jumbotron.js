import React from 'react';

const Jumbotron = props => {
    return (
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img width="100%" height="500px" src="https://s1.eestatic.com/2017/02/13/cocinillas/Cocinillas_193495389_116293002_1024x576.jpg" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img width="100%" height="500px" src="https://dam.cocinafacil.com.mx/wp-content/uploads/2018/08/beneficios-de-tomar-cafe.jpg" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img width="100%" height="500px" src="https://ep01.epimg.net/elcomidista/imagenes/2017/09/27/articulo/1506522721_155894_1506523041_media_normal.jpg" class="d-block w-100" alt="..." />
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    )
}

export default Jumbotron;