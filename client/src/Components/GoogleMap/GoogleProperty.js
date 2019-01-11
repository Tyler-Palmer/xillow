import React from "react"

const GoogleProperty = (props) => {
    console.log(props)
    return (
        <div className="google-property__small-container">
            <div className="google-property__image" style={{ backgroundImage: `url(${props.listings.main_image})` }}>
                <p>House For Sale</p>
                <h3>{props.listings.price}</h3>
                <div className="google-property__nessecity">
                    <p>{props.listings.title}</p>
                    <p>{props.listings.bedrooms}</p>
                    <p>{props.listings.area}</p>
                </div>
                <div className="google-property__address-container">
                    <p className="google-property__address">{props.listings.address.slice(0, props.listings.address.indexOf(","))}</p>
                    <p className="google-property__address">{props.listings.address.slice(props.listings.address.indexOf(",") + 1, -1)}</p>
                </div>
            </div>
        </div>
    )
}


export default GoogleProperty