import React from "react"
import { withServerListing } from "../../Context/ServerListingContext" 

const ServerListing = () =>{
    return(
        <div>
            <h2>Our Listings in SLC: </h2>
        </div>
    )
}

export default withServerListing(ServerListing)