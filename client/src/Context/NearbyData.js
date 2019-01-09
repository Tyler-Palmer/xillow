import React from "react"
import axios from "axios"


const NearbyDataProvider = React.createContext()

class NearbyData extends React.Component {
    constructor(){
        super()
        this.state = {
            nearbyInfos: []
        }
    }


    getNearbyLocationData = async (address) => {
        const serverUrl = "https://vschool-cors.herokuapp.com?url="
        const geocoding = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.REACT_APP_GOOGLEKEY}`)
        const data = await axios.get(`${serverUrl}https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${geocoding.data.results[0].geometry.location.lat},${geocoding.data.results[0].geometry.location.lng}&rankby=distance&type=food&key=${process.env.REACT_APP_GOOGLEPLACEKEY}`)
        this.setState({
            nearbyInfos: data.results
        })   
    }

    

    render() {
        return (
            <NearbyDataProvider.Provider
                value={{
                    ...this.state,
                    getNearbyLocationData: this.getNearbyLocationData
                }}>
                {this.props.children}
            </NearbyDataProvider.Provider>
        )
    }
}

export default NearbyData

export const withGoogleData = (C) => props => (
    <NearbyDataProvider.Consumer>
        {
            value => < C  {...props} {...value}/>
        }
    </NearbyDataProvider.Consumer>
)
