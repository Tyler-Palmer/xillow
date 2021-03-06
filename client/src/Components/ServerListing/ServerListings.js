import React from "react"
import ServerListing from "./ServerListing"
import { withServerListing } from "../../Context/ServerListingContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { withHouses } from "../../Context/SavedHouseProvider"

class ServerListings extends React.Component {
    constructor() {
        super();
        this.state = {
            currentListing: 1,
            isChecking: false,

        }
    }
    componentDidMount() {
        this.props.getNewListingData()
        console.log('trying to get listing data')
    }

    handleSwitchingListing = (id) => {
        if (this.state.currentListing >= 4) {
            this.setState({
                currentListing: 1
            })
        } else {
            this.setState(prevState => ({
                currentListing: prevState.currentListing + 1
            }))
        }
    }

    handleLeftArrow = () => {
        if (this.state.currentListing <= 1) {
            this.setState({
                currentListing: 4
            })
        } else {
            this.setState(prevState => ({
                currentListing: prevState.currentListing - 1
            }))
        }
    }

    handleMouseOver = () => {
        this.setState({
            isChecking: true
        })
    }

    handleMouseLeave = () => {
        this.setState({
            isChecking: false
        })
    }

    render() {
        console.log(this.props.listingsData)
        return (
            <div className="listings__container" onMouseOver={this.handleMouseOver} onMouseLeave={this.handleMouseLeave} >
                <h5>Our Listings in Salt Lake City: </h5>
                {this.state.isChecking &&
                    <FontAwesomeIcon icon="arrow-alt-circle-left" className="left-arrow-icons" onClick={this.handleLeftArrow} />
                }


                <div className={`listings__small-container ${this.state.currentListing === 1 ? "is-selected-listing" : "not-selected-listing"}`}>
                    {this.props.listingsData.slice().splice(0.5).map((each, index) => <ServerListing key={index} {...each} />)}
                </div>


                <div className={`listings__small-container ${this.state.currentListing === 2 ? "is-selected-listing" : "not-selected-listing"}`}>
                    {this.props.listingsData.slice().splice(5.10).map((each, index) => <ServerListing key={index} {...each} />)}
                </div>



                <div className={`listings__small-container ${this.state.currentListing === 3 ? "is-selected-listing" : "not-selected-listing"}`}>
                    {this.props.listingsData.slice().splice(10.15).map((each, index) => <ServerListing key={index} {...each} />)}
                </div>


                <div className={`listings__small-container ${this.state.currentListing === 4 ? "is-selected-listing" : "not-selected-listing"}`}>
                    {this.props.listingsData.slice().splice(15.20).map((each, index) => <ServerListing key={index} {...each} />)}
                </div>


                {this.state.isChecking &&
                    <FontAwesomeIcon icon="arrow-alt-circle-right" className="right-arrow-icons" onClick={this.handleSwitchingListing} />
                }
            </div>

        )
    }
}

export default withHouses(withServerListing(ServerListings))