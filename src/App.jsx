import React from "react"
import Header from "./Base/Header"
import Main from "./Base/Main"
import Footer from "./Base/Footer"

import "./App.scss"

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Header />
                <Main />
                <Footer />
            </div>
        )
    }
}

export default App