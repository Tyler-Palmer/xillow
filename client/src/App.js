import React, { Fragment } from "react"
import Header from "./Components/Header/Header"
import Testimony from "./Components/Testimony/Testimony"
import Footer from "./Components/Footer/Footer"
import { Switch, Route } from "react-router-dom"
import Nav from "./Components/Navbar/Nav"
import Search from "./Components/Search/Search"
import Mortgage from "./Components/Mortgage/Mortgage";
import ServerListing from "./Components/ServerListing/ServerListing"

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
        return (
            <div>
                <Nav currentWidth = {this.state.currentWidth} alreadyChange = {this.state.alredyChange} />
                <Switch>
                    <Route exact path="/" render={props =>
                        <Fragment>
                            <Header {...props} />
                            <ServerListing {...props}/>
                            <Testimony {...props} />
                        </Fragment>}
                    />

                    <Route path ="/search" component = {Search} />
                    <Route path ="/mortgage" component = {Mortgage} />
                </Switch>
                <Footer currentWidth = {this.state.currentWidth} />
            </div>
        )
    }
}

export default App;