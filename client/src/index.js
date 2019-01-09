import React from "react";
import ReactDOM from "react-dom"
import App from "./App"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./ComponentStyles/_styles.scss"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSearch, faCircle, faQuoteLeft, faCopyright, faBars, faQuoteRight, faArrowDown, faArrowUp, faUtensils, faMugHot, faBeer, faMapMarker, faHome, faWindowClose} from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter } from "react-router-dom";
import NearbyData from "./Context/NearbyData"
import UserProvider from "./Context/UserProvider"
import SearchProvider from "./Context/SearchProvider"
library.add(fab, faSearch, faCircle, faQuoteLeft,  faCopyright, faBars, faQuoteRight, faArrowDown, faArrowUp, faUtensils, faMugHot, faBeer, faMapMarker, faHome, faWindowClose);


ReactDOM.render(
    <BrowserRouter>
        <NearbyData>
            <SearchProvider>
                <UserProvider>
                    <App />
                </UserProvider>
            </SearchProvider>
        </NearbyData>
    </BrowserRouter>
    , document.getElementById("root"))

//call this when you want font awesome, not included fa <FontAwesomeIcon icon="search" />
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'