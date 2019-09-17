import React from "react"

class FullVH extends React.Component {
    render() {
        let Tag = this.props.tag || "div";
        return (
            <Tag className={`vh-100 ${this.props.className}`} id={this.props.id}>
                {this.props.children}
            </Tag>
        )
    }
}

export default FullVH