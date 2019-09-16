import React from "react"

class ProjectModal extends React.Component {
    render() {
        const data = this.props.data
        return (
            <div>
                <p>{data.title}</p>
            </div>
        )
    }
}

export default ProjectModal