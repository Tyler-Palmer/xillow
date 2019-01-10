import React from "react";
import ReactDOM from "react-dom"
import App from "./App"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./ComponentStyles/_styles.scss"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSearch, faCircle, faQuoteLeft, faCopyright, faBars, faQuoteRight, faArrowDown, faArrowUp, faUtensils, faMugHot, faBeer, faMapMarker, faHome, faWindowClose, faBath, faBed, faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter } from "react-router-dom";
import NearbyData from "./Context/NearbyData"
import UserProvider from "./Context/UserProvider"
import SearchProvider from "./Context/SearchProvider"
import ServerListingContext from "./Context/ServerListingContext";
import SavedHouseProvider from "./Context/SavedHouseProvider"
library.add(fab, faSearch, faCircle, faQuoteLeft, faCopyright, faBars, faQuoteRight, faArrowDown, faArrowUp, faUtensils, faMugHot, faBeer, faMapMarker, faHome, faWindowClose, faBath, faBed, faArrowAltCircleLeft, faArrowAltCircleRight);


ReactDOM.render(
    <BrowserRouter>
        <SavedHouseProvider>
            <NearbyData>
                <SearchProvider>
                    <ServerListingContext>
                        <UserProvider>
                            <App />
                        </UserProvider>
                    </ServerListingContext>
                </SearchProvider>
            </NearbyData>
        </SavedHouseProvider>
    </BrowserRouter>
    , document.getElementById("root"))

//call this when you want font awesome, not included fa <FontAwesomeIcon icon="search" />
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'