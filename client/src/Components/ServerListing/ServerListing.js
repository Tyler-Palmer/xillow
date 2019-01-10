import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ServerListing = (props) => {
    console.log(props)
    console.log(props.main_image)
    return (
        <div className ="listing__container">
            <div className = "listing__image" style = {{backgroundImage: `url(${props.listings.main_image})`}}>
            </div>
            <div className = "listing__texts">
                <p>{props.listings.price}</p>
                <div className = "listing__icons">
                    <p><FontAwesomeIcon icon = "bath"/>{props.listings.title}</p>
                    <p><FontAwesomeIcon icon = "bed"/>{props.listings.bedrooms}</p> 
                    <p><FontAwesomeIcon icon = "home"/>{props.listings.area}</p>  
                </div>
            </div>
        </div>
    )

}
export default ServerListing