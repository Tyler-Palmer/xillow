import React, { Fragment } from "react"
import Header from "./Components/Header/Header"
import Testimony from "./Components/Testimony/Testimony"
import Footer from "./Components/Footer/Footer"
import { Switch, Route } from "react-router-dom"
import Nav from "./Components/Navbar/Nav"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            currentWidth: window.innerWidth,
            alredyChange: false,
        }
    }

    componentDidMount() {
        window.addEventListener("resize", this.handleResize)
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize)
    }

    handleResize = () => {
        if (window.innerWidth <= 768 && !this.state.alredyChange) {
            this.setState({
                currentWidth: window.innerWidth,
                alredyChange: true
            })
        }
        else if (window.innerWidth > 769 && this.state.alredyChange) {
            this.setState({
                currentWidth: window.innerWidth,
                alredyChange: false
            })
        }
    }

    render() {
        console.log(this.state.currentWidth)
        return (
            <div>
                <Nav currentWidth = {this.state.currentWidth} alreadyChange = {this.state.alredyChange} />
                <Switch>
                    <Route path="/" render={props =>
                        <Fragment>
                            <Header {...props} />
                            <Testimony {...props} />
                        </Fragment>}
                    />
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default App;