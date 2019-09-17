import React from "react"
import Welcome from "./Welcome"
import AboutMe from "./AboutMe"
import ProjectsResume from "./ProjectsResume"
import Contact from "./Contact"

class Main extends React.Component {
    render() {
        return (
            <div className="row">
                <Welcome id="sect-welcome" />
                <AboutMe id="sect-aboutme" />
                <ProjectsResume id="sect-personal" datafile="./personalprojects.json" />
                <ProjectsResume id="sect-academic" datafile="./academicprojects.json" />
                <Contact id="sect-contact" />
            </div>
        )
    }
}

export default Main