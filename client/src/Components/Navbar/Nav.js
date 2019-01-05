import React from "react"
import logo from "../../assets/zillowlogo.png"

const Nav = () => {
    return(
        <div className = "nav-container"> 
            <a className = "navbar-brand" href = "/">
                <div className = "navbar-brand__image" style ={{backgroundImage: `url(${logo})`}}>
                </div>
            </a> 
            <div className = "nav-container__list-container">
                <ul className = "nav-container__list-small-container">
                    <li className ="nav-item active">
                        <a href= "#">Buy</a>
                    </li>
                    <li className = "nav-item">
                        <a href = "#">Rent</a>
                    </li>
                    <li className = "nav-item">
                        <a href = "#">Mortgages</a>
                    </li>
                    <li className = "nav-item">
                        <a href = "#">Agent Finder</a>
                    </li>
                    <li className = "nav-item">
                        <a href = "#"> More </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Nav