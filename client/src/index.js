import React from "react";
import ReactDOM from "react-dom"
import App from "./App"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./ComponentStyles/_styles.scss"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
<<<<<<< Sub-Footer
import { faSearch, faCircle, faQuoteLeft, faHome,  faCopyright } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faSearch, faCircle, faQuoteLeft, faHome,  faCopyright);

ReactDOM.render(
=======
import { faSearch, faCircle, faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faSearch, faCircle, faQuoteLeft);
import { BrowserRouter } from 'react-router-dom'
import UserProvider from '.Context/UserProvider'

ReactDOM.render(<BrowserRouter>
    <UserProvider>
        <App />
    </UserProvider>
</BrowserRouter>, document.getElementById("root"))
>>>>>>> master

        <App />
, document.getElementById("root"))

//call this when you want font awesome, not included fa <FontAwesomeIcon icon="search" />
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'