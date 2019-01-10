import React from "react"
import { withServerListing } from "../../Context/ServerListingContext"

class ServerListing extends React.Component {

    componentDidMount(){
        this.props.getListingData()
    }

    render() {
        return (
            <div>
                <h2>Our Listings in SLC: </h2>
            </div>
        )
    }
}
export default withServerListing(ServerListing)