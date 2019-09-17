import React from "react"
import FullVH from "../Modules/FullVH"
import Screen from "../Modules/Screen"
import "./Welcome.scss"

class Welcome extends React.Component {
    render() {
        return (
            <Screen id={this.props.id}>
                <FullVH id="div-robot" className="col-4">
                    <img id="img-robot" src="/images/robot.png" alt="robot" />
                </FullVH>
                <FullVH id="div-welcome" className="col-8 p-5">
                    <h1 className="mb-5">Bienvenido a mi portafolio</h1>
                    <p>A continuación encontrarás información sobre mí, a qué me dedico y qué me apasiona.</p>
                    <p>También podrás ver los proyectos personales en los que he trabajado, y aquellos que han servido
                        como evidencia de mis logros académicos a la fecha. Cada proyecto viene acompañado de un enlace
                        a su repositorio (Github) original; si tengo la intención de actualizarlo o rehacerlo, se
                        adjunta un enlace a la versión modificada (branch, fork o repositorio nuevo).</p>
                    <p>Al final de la página encontrarás un formulario de contacto que abrirá tu proveedor de correo,  si deseas contactarme.</p>
                    <p className="mb-5">Sin mucho más que decir, ¡bienvenido a mi portafolio!</p>
                    <p className="text-muted">&lt;Puedes usar la rueda del ratón o las flechas de dirección para navegar&gt;</p>
                </FullVH>
            </Screen>
        )
    }
}

export default Welcome