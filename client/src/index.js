import React from "react";
import ReactDOM from "react-dom"
import App from "./App"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./ComponentStyles/_styles.scss"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSearch, faCircle, faQuoteLeft, faHome, faCopyright, faBars, faQuoteRight, faArrowDown, faArrowUp, faUtensils, faMugHot, faBeer } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter } from "react-router-dom";
import UserProvider from "./Context/UserProvider"
import SearchProvider from "./Context/SearchProvider"
library.add(fab, faSearch, faCircle, faQuoteLeft, faHome, faCopyright, faBars, faQuoteRight, faArrowDown, faArrowUp, faUtensils, faMugHot, faBeer);


ReactDOM.render(
    <BrowserRouter>
        <SearchProvider>
            <UserProvider>
                <App />
            </UserProvider>
        </SearchProvider>
    </BrowserRouter>
    , document.getElementById("root"))

//call this when you want font awesome, not included fa <FontAwesomeIcon icon="search" />
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'