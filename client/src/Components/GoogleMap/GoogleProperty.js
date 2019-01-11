import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { withServerListing } from "../../Context/ServerListingContext"

class GoogleProperty extends React.Component {
    constructor() {
        super()

    }

    handleHoverImage = (id) => {
        this.props.handleHoverImage(id)
    }

    handleLeaveImage = () => {
        this.props.handleLeaveImage()
    }

    render() {
        return (
            <div className="google-property__small-container" onMouseOver={() => this.handleHoverImage(this.props._id)} onMouseLeave={this.handleLeaveImage}>
                <div className="google-property__image" style={{ backgroundImage: `url(${this.props.listings.main_image})` }}>
                    <div className="google-property__wish-list">
                        <h3><FontAwesomeIcon icon="heart" className="google-property__heart" /></h3>
                    </div>
                    <div className="google-property__listing-area">
                        <p><FontAwesomeIcon icon="circle" className="home-for-sale__circle" />House For Sale</p>
                        <div className="google-property__nessecity">
                            <h3>{this.props.listings.price}</h3>
                            <p>{this.props.listings.title}</p>
                            <p>{this.props.listings.bedrooms}</p>
                            <p>{this.props.listings.area}</p>
                        </div>
                        <div className="google-property__address-container">
                            <p className="google-property__address">{this.props.listings.address.slice(0, this.props.listings.address.indexOf(","))}</p>
                            <p className="google-property__address">{this.props.listings.address.slice(this.props.listings.address.indexOf(",") + 1, -1)}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
// pagination.map((each, id) => <p onClick={() => this.handlePagination(id + 1)}>{each}</p>)

export default withServerListing(GoogleProperty);