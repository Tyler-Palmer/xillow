import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { withServerListing } from "../../Context/ServerListingContext"

class GoogleIcon extends React.Component {
    constructor() {
        super()
        this.state = {
            checkingArea: false
        }
    }

    handleMouseOver = () => {
        this.setState({
            checkingArea: true
        })
    }

    handleMouseLeave = () => {
        this.setState({
            checkingArea: false
        })
    }

    render() {
        console.log(this.props)
        return (
            
            <div className="google-icon-container" style ={{display: this.props.address === null && "none"}} onMouseOver={this.handleMouseOver} onMouseLeave={this.handleMouseLeave}>
                {
                    this.props.house ? <FontAwesomeIcon className="home-icon" icon="home" /> :
                        <div className="google-icon__image" style={{ backgroundImage: `url(${this.props.icon})` }}>
                        </div>
                }
                {
                    this.state.checkingArea &&
                    this.props.listings.address &&
                    <div className = "google-icon__listing-container">
                        <div className="google-icon__main-image" style={{ backgroundImage: `url(${this.props.listings.main_image})` }}></div>
                        <div className="google-icon__price">
                            <h4>{this.props.listings.price}</h4>
                            <div className="google-icon__icons">
                                <p>{this.props.listings.title}</p>
                                <p>{this.props.listings.bedrooms}</p>
                                <p>{this.props.listings.area}</p>
                            </div>
                        </div>
                    </div>
                }
                {
                    this.props._id === this.props.checkingRightNow &&
                    this.props.listings.address &&
                    <div className = "google-icon__listing-container">
                        <div className="google-icon__main-image" style={{ backgroundImage: `url(${this.props.listings.main_image})` }}></div>
                        <div className="google-icon__price">
                            <h4>{this.props.listings.price}</h4>
                            <div className="google-icon__icons">
                                <p>{this.props.listings.title}</p>
                                <p>{this.props.listings.bedrooms}</p>
                                <p>{this.props.listings.area}</p>
                            </div>
                        </div>
                    </div>
                }
            </div>
        )

    }
}

export default withServerListing(GoogleIcon)