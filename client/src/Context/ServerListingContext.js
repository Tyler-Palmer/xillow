import React, { Fragment } from "react"
import axios from "axios"

const { Provider, Consumer } = React.createContext()

class ServerListingContext extends React.Component {
    constructor() {
        super()
        this.state = {
            listingsData: [],
            newListingData: []
        }
    }

    getListingData = () => {
        axios.get("/listing/listings").then(res => {
            this.setState({
                listingsData: res.data
            }, () => {
                this.changeDataToLocation();
            })
        })
    }


    displayListingsData = () => {
        this.getListingData()
    }

    changeDataToLocation = async () => {
        this.state.listingsData.map(each => axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${each.listings.address}&key=${process.env.REACT_APP_GOOGLEKEY}`).then(res => {
            const newData = this.state.listingsData.find(house => house._id === each._id)
            newData.longtitude = res.data.results[0].geometry.location.lng;
            newData.latitude = res.data.results[0].geometry.location.lat;
            if (this.state.newListingData.length <= 25) {
                this.setState(prevState => ({
                    newListingData: [...prevState.newListingData, newData]
                }))
            }
        }
        ))
    }

    render() {
        return (
            <Provider value={{
                ...this.state,
                getListingData: this.getListingData,
                displayListingsData: this.displayListingsData
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

export default ServerListingContext

export const withServerListing = (C) => props => (
    <Consumer>
        {
            value => < C {...props} {...value} />
        }
    </Consumer>
)

