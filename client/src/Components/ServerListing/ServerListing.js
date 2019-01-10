import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ServerListing = (props) => {
    console.log(props)
    return (
        <div>
            <div className = "listing__image" style = {{backgroundImage: `url(${props.main_image})`}}>
            </div>
            <div className = "listing__texts">
                <h3>{props.Headline}</h3>
                <p>{props.price}</p>
                <div>
                    <p><FontAwesomeIcon icon = "bath"/>{props.title}</p>
                    <p><FontAwesomeIcon icon = "bed"/>{props.bedrooms}</p> 
                    <p><FontAwesomeIcon icon = "home"/>{props.area}</p>  
                </div>
            </div>
        </div>
    )

}
export default ServerListing