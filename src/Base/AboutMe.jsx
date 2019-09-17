import React from "react"
import FullVH from "../Modules/FullVH"
import Screen from "../Modules/Screen"
import "./AboutMe.scss"

class AboutMe extends React.Component {
    render() {
        return (
            <Screen id="sect-aboutme">
                <FullVH id="div-about" className="col-8 p-5">
                    <h2 className="mb-5">> Sobre mi</h2>
                    <div className="pl-3 mb-5 text-justify">
                        <p>Mi nombre es Sergio Castro Jiménez, soy estudiante de 6° semestre en la carrera de Ingeniería
                            en Informática.</p>
                        <p>Estudio en la institución Duoc UC, sede Plaza Oeste, desde el año 2017.</p>
                        <p>Trabajé desde entonces hasta septiembre de 2018 en puestos de comida rápida. Actualmente me
                            dedico a tiempo completo a mis estudios</p><br />
                        <p>Me considero una persona curiosa y generalmente motivada. Me gusta resolver desafios e
                            innovar, aprender de manera contínua así como enseñar a otros. Trabajo bien con gente
                            apasionada y con interés en aprender; valoro y doy espacio para que otros opinen de manera
                            libre, ya que considero que es la mejor manera para diseñar una solución.</p>
                    </div>
                </FullVH>
                <FullVH id="div-lightbulb" className="col-4">
                    <img id="img-lightbulb" src="/images/lightbulb.png" alt="" />
                </FullVH>
            </Screen>
        )
    }
}

export default AboutMe