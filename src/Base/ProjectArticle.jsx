/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import ProjectModal from "./ProjectModal"
import "./ProjectArticle.scss"

class ProjectArticle extends React.Component {
    render() {
        const data = this.props.data
        return (
            <article className="col project-article" id={`article-${data.title}`}>
                <h3 className="ml-3 mt-3">{data.title}</h3>
                <a data-toggle="modal" data-target={`#modal-${data.title}`}>
                    <img src={data.image} alt="" className="img-col" />
                </a>
                <ProjectModal className="project-modal" data={data.modal} id={`modal-${data.title}`} />
            </article>
        )
    }
}

export default ProjectArticle