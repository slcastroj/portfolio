import React from "react"
import Screen from "../Modules/Screen"

class Contact extends React.Component {
    render() {
        return (
            <Screen id={this.props.id}>
                <div className="col-12 p-5">
                    <h3 class="mb-5">> Contacto</h3>
                    <form action="" class="row">
                        <div class="col-6">
                            <div class="form-group">
                                <label for="name">Nombre:</label>
                                <input type="text" name="name" class="form-control" />
                            </div>
                            <div class="form-group">
                                <label for="email">Correo electrónico:</label>
                                <input type="text" name="email" class="form-control" />
                            </div>
                            <div class="form-group">
                                <label for="subject">Asunto:</label>
                                <input type="text" name="subject" class="form-control" />
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group">
                                <label for="message">Mensaje:</label>
                                <textarea name="message" class="form-control" rows="8" noresize></textarea>
                            </div>
                        </div>
                        <div class="col-12 text-right">
                            <button class="btn btn-primary">Enviar correo electrónico</button>
                        </div>
                    </form>
                </div>
            </ Screen>
        )
    }
}

export default Contact