import React from "react"
import axios from "axios"

const { Provider, Consumer } = React.createContext()

class ServerListingContext extends React.Component {
    constructor() {
        super()
        this.state = {
            listingsData: []
        }
        this.newData = undefined
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
        // this.state.listingsData.map(each => axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${each.listings.address}&key=${process.env.REACT_APP_GOOGLEKEY}`).then(res => {
        //     console.log(res.data.results[0].geometry.location.lng)        
        //         this.newData = this.state.listingsData.map(house => console.log(res.data.results[0].geometry.location.lng))
        // }
        // ))
        for(let each of this.state.listingsData){
            axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${each.listings.address}&key=${process.env.REACT_APP_GOOGLEKEY}`).then(res=>{
                console.log(res.data)
                console.log(res.data.results[0].geometry.location.lng)  
            
            })
        }
    }

    render() {
        console.log(this.newData)
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

// house._id === each._id ? { ...house, longtitude: res.data.results[0].geometry.location.lng, latitude: res.data.results[0].geometry.location.lat } : house