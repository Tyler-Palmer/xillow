import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { withUser } from '../../Context/UserProvider'
import { withHouses } from '../../Context/SavedHouseProvider'

const ServerListing = (props) => {
    // console.log(props)
    return (
        <div className="listing__container">
            <div className="listing__image" style={{ backgroundImage: `url(${props.listings.main_image})` }}>
                <FontAwesomeIcon className="listing-heart" icon="heart" onClick={() => props.addUserHouse(props.user._id, props._id)} />
            </div>
            <div className="listing__texts">
                <p>{props.listings.price}</p>
                <div className="listing__icons">
                    <p><FontAwesomeIcon icon="bath" /> {props.listings.title}</p>
                    <p><FontAwesomeIcon icon="bed" /> {props.listings.bedrooms}</p>
                    <p><FontAwesomeIcon icon="home" /> {props.listings.area}</p>
                </div>
                <p className="listing__address">{props.listings.address.slice(0, props.listings.address.indexOf(","))}</p>
                <p className="listing__address">{props.listings.address.slice(props.listings.address.indexOf(",") + 1, -1)}</p>
            </div>
        </div>
    )

}
export default withHouses(withUser(ServerListing))