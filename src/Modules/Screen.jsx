import React from "react"
import FullVH from "./FullVH"

class Screen extends React.Component {
    render() {
        return (
            <FullVH tag="section" className={`col-12 ${this.props.className}`} id={this.props.id}>
                <FullVH tag="article" className="row" id={`${this.props.id}-inner`}>
                    {this.props.children}
                </FullVH>
            </FullVH>
        )
    }
}

export default Screen