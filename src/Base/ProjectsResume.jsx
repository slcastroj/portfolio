import React from "react"
import ProjectArticle from "./ProjectArticle"
import Screen from "../Modules/Screen"

class ProjectsResume extends React.Component {
    render() {
        let data = require("" + this.props.datafile)
        return (
            <Screen id={this.props.id}>
                {
                    data.details.map((d, i) => {
                        return (<ProjectArticle data={d} />)
                    })
                }
            </Screen>
        )
    }
}

export default ProjectsResume