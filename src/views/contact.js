import React from 'react';

const Contact = props => {
    return (
        <div className="container text-center my-5">
            <div className="row">
                <div className="col-sm-12 col-xs-10">
                    <h1 className="mb-5">Sobre Nosotros</h1>
                    <img className="img-fluid" width="100%" src="https://s1.eestatic.com/2017/02/13/cocinillas/Cocinillas_193495389_116293002_1024x576.jpg" class="" alt="..." />
                    <div className="upper-text">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-10 d-flex">
                    <div className="contact-form col-md-7 py-5">
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="inputEmail4">Nombre y Apellido</label>
                                <input type="email" class="form-control" id="inputEmail4" placeholder="Nombre y apellido" />
                            </div>
                            <div className="form-group col-md-6">
                                <label for="inputEmail4">Email</label>
                                <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div class="form-group col-md-12">
                                <label for="exampleFormControlTextarea1">Tu mensaje aquí</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="contact-form col-md-5 py-4">
                        <div className="">
                            <h3>Los Cafetales de Satan</h3>
                            <p className="contact-text">Santiago de Chile 11 28297089 holacl@loscafetales.com Pickup Dorrego 2133, Huerta Coworking CP 1414, Palermo Horario: L a V de 10 a 17.30 hrs</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;