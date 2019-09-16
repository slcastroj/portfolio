import React from "react"
import ProjectModal from "./ProjectModal"

class ProjectArticle extends React.Component {
    render() {
        const data = this.props.data
        return (
            <div>
                <p>{data.title}</p>
                <ProjectModal data={data.modal} />
            </div>
        )
    }
}

export default ProjectArticle