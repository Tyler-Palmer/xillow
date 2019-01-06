import React, { Fragment } from "react"
import Header from "./Components/Header/Header"
import Testimony from "./Components/Testimony/Testimony"
import Footer from "./Components/Footer/Footer"
import { Switch, Route } from "react-router-dom"

const App = () => {
    return (
        <div>
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

export default App;