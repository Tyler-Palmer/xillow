import React from "react";
import ReactDOM from "react-dom"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./ComponentStyles/_styles.scss"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSearch, faCircle, faQuoteLeft, faHome,  faCopyright } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faSearch, faCircle, faQuoteLeft, faHome,  faCopyright);

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, document.getElementById("root"))

//call this when you want font awesome, not included fa <FontAwesomeIcon icon="search" />
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'