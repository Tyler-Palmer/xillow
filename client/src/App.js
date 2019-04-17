import React, { Fragment } from "react"
import Header from "./Components/Header/Header"
import Testimony from "./Components/Testimony/Testimony"
import Footer from "./Components/Footer/Footer"
import { Switch, Route } from "react-router-dom"
import Nav from "./Components/Navbar/Nav"
import Search from "./Components/Search/Search"
import ServerListings from "./Components/ServerListing/ServerListings"
import News from "./Components/News/News"
import UserHouses from "./Components/UserHouses/UserHouses"
import EachHouse from "./Components/EachHouse/EachHouse";


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
            <div className="background">
                <Nav currentWidth={this.state.currentWidth} alreadyChange={this.state.alredyChange} />
                <Switch>
                    <Route exact path="/" render={props =>
                        <Fragment>
                            <Header {...props} />
                            <ServerListings {...props} />
                            <Testimony {...props} />
                        </Fragment>}
                    />
                    <Route path="/search/:id" component={EachHouse} />
                    <Route path="/search" component={Search} />
                    <Route path="/news" component={News} />
                    <Route path="/savedHouses" render={props => <UserHouses {...props} />} />
                </Switch>
                <Footer currentWidth={this.state.currentWidth} />
            </div>
        )
    }
}

export default App;