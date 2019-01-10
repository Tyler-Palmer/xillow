import React from "react"
import ServerListing from "./ServerListing"
import { withServerListing } from "../../Context/ServerListingContext"


class ServerListings extends React.Component {
    constructor() {
        super();
        this.state = {
            currentListing: 1
        }
    }
    componentDidMount() {
        this.props.getListingData()
    }

    handleSwitchingListing = () => {
        if (this.state.currentListing <= 3) {
        } else {
            this.setState(prevState => ({
                currentListing: prevState.currentListing + 1
            }))
        }
    }

    render() {
        return (
            <div className = "listings__container">
                <h5>Our Listings in Salt Lake City: </h5>
                <div className="listings__small-container">
                    {this.props.listingsData.map(each => <ServerListing {...each} />)}
                </div>
            </div>
        )
    }
}

export default withServerListing(ServerListings)