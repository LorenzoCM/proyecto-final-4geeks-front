import React from 'react';



const Blog = (props) => {
    return (
        <>
            <div className="jumbotron jumbotron-fluid  ">
                <div className="card bg-dark text-white text-center">
                    <img width="100%" height="500px" src="https://mk0cs00242yfx7ww7i54.kinstacdn.com/wp-content/uploads/sites/5/roasted-coffee-beens-queen-elizabeth-national-park.jpg" className="d-block w-100" alt="..." />
                    <div className="card-img-overlay mx-0 px-0 col-12 d-flex align-items-center">
                        <h1 className="card-title col-12 text-center display-2 ">Descubre más acerca del café</h1>
                    </div>
                </div>

            </div>
        
        <section>
            <div className="container mt-5">
                <div className="mb-5">
                    <h3>Sobre el café</h3>
                </div>
                <div className="card-deck d-flex justify-content-center">
                    <div className="col-4">
                        <div className="card">
                            <img src="https://rutadelcafeperuano.com/wp-content/uploads/2018/03/NEYRA.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Post 1</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card">
                            <img src="https://rutadelcafeperuano.com/wp-content/uploads/2018/03/NEYRA.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Post 2</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card">
                            <img src="https://rutadelcafeperuano.com/wp-content/uploads/2018/03/NEYRA.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Post 3</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

            <section className="my-5">
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img width="90%" height="400px" src="https://s1.eestatic.com/2017/02/13/cocinillas/Cocinillas_193495389_116293002_1024x576.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img width="90%" height="400px" src="https://dam.cocinafacil.com.mx/wp-content/uploads/2018/08/beneficios-de-tomar-cafe.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img width="90%" height="400px" src="https://ep01.epimg.net/elcomidista/imagenes/2017/09/27/articulo/1506522721_155894_1506523041_media_normal.jpg" className="d-block w-100" alt="..." />
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
            </section>

            <section className="my-5">
                <div className="card mb-3 justify-content-between align-items-center" max-width="400px" >
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src="https://rutadelcafeperuano.com/wp-content/uploads/2018/03/NEYRA.png" className="card-img-top" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text text-justify">"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                <button type="button" class="btn btn-outline-info justify-content-end float-right">Ver más</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Blog;

