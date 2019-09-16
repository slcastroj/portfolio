import React from "react"

class FullVH extends React.Component {
    render() {
        let Tag = this.props.tag || "div";
        return (
            <Tag className={`full-vh ${this.props.className}`} id={this.props.id}>
                {this.props.children}
            </Tag>
        )
    }
}

export default FullVH