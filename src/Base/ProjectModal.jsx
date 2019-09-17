import React from "react"
import "./ProjectModal.scss"

class CarouselIndicators extends React.Component {
    render() {
        let images = this.props.images
        let modalid = this.props.modalid
        return (
            <ol className="carousel-indicators">
                {
                    images.map((e, i) => {
                        let className = ""
                        if (i === 0) { className = 'active' }
                        return (<li data-target={`#${modalid}`} data-slide-to={i} className={className}></li>)
                    })
                }
            </ol>
        )
    }
}

class CarouselInner extends React.Component {
    render() {
        let images = this.props.images
        return (
            <div className="carousel-inner">
                {
                    images.map((e, i) => {
                        let className = ""
                        if (i === 0) { className = 'active' }
                        return (
                            <div className={`carousel-item ${className}`}>
                                <img src={e} alt="" className="d-block w-100" />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

class CarouselControls extends React.Component {
    render() {
        let modalid = this.props.modalid
        return (
            <div>
                <a class="carousel-control-prev" href={`#${modalid}`} role="button"
                    data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href={`#${modalid}`} role="button"
                    data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        )
    }
}

class ProjectModal extends React.Component {
    render() {
        const data = this.props.data
        let repos = [<a href={data.oldLink}>Repositorio original</a>]
        if (data.isArchived) {
            repos.push(" | ", <a href={data.newLink}>Repositorio actualizado</a>)
        }
        return (
            <div className="modal m-0 project-modal" role="dialog" id={`modal-${data.title}`}>
                <div className="mx-auto row text-white text-justify p-3 project-modal-inner" id={`modal-${data.title}-inner`}>
                    <div className="col-6 project-modal-detail">
                        <h3 className="mb-0">{data.title}</h3>
                        <p className="text-muted mb-4">&lt;{data.status}&gt;</p>
                        <p className="mb-4">{data.description}</p>
                        <h5 className="mb-2"><b>Resumen técnico</b></h5>
                        <p><b>Frameworks:</b> {data.frameworks}</p>
                        <p><b>Bases de datos:</b> {data.databases}</p>
                        <p><b>Librerías:</b> {data.libraries}</p>
                        <p><b>Lenguajes:</b> {data.languages}</p>
                    </div>
                    <div className="col-6 project-modal-gallery">
                        <div className="carousel modal-gallery-carousel slide mx-auto" id={`modal-${data.title}-carousel`} data-ride="carousel" data-interval="false">
                            <CarouselIndicators images={data.images} modalid={`modal-${data.title}-carousel`} />
                            <CarouselInner images={data.images} />
                            <CarouselControls modalid={`modal-${data.title}-carousel`} />
                        </div>
                    </div>
                </div>
                <div class="row mx-auto text-white p-0 project-modal-links">
                    <div class="col-12 my-auto text-center">
                        {repos}
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectModal