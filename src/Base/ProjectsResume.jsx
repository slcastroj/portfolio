import React from "react"
import ProjectArticle from "./ProjectArticle"
import Screen from "../Modules/Screen"

class ProjectsResume extends React.Component {
    render() {
        let data = require("" + this.props.datafile)
        return (
            <Screen id={this.props.id}>
                <div className="p-5 col-12 vh-10">
                    <h3>{data.title}</h3>
                </div>
                <div className="col-12 vh-90">
                    <div className="row">
                        {
                            data.projects.map((d, i) => {
                                return (<ProjectArticle data={d} />)
                            })
                        }
                    </div>
                </div>
            </Screen>
        )
    }
}

export default ProjectsResume