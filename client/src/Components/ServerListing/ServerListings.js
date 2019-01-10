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
            <div>
                <h2>Our Listings in SLC: </h2>
                <div className="listings__container">
                    {this.props.listingsData.map(each => <ServerListing {...each} />)}
                </div>
            </div>
        )
    }
}

export default withServerListing(ServerListings)