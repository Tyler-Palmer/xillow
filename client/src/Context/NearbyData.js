import React from "react"
import axios from "axios"


const NearbyDataProvider = React.createContext()

class NearbyData extends React.Component {
    constructor() {
        super()
        this.state = {
            nearbyInfos: [],
            longitude: 0,
            latitude: 0,
            placeData: {},
            imageData: ""
        }
    }

    getNearbyLocationData = async (address) => {
        const serverUrl = "https://vschool-cors.herokuapp.com?url="
        const geocoding = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.REACT_APP_GOOGLEKEY}`);

        const data = await axios.get(`${serverUrl}https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${geocoding.data.results[0].geometry.location.lat},${geocoding.data.results[0].geometry.location.lng}&radius=10000d&type=food&key=${process.env.REACT_APP_GOOGLEPLACEKEY_T}`);

        this.setState({
            longitude: geocoding.data.results[0].geometry.location.lng,
            latitude: geocoding.data.results[0].geometry.location.lat,
            nearbyInfos: data.data.results
        })
    }


    getPlaceData = (placeid) => {
        const serverUrl = "https://vschool-cors.herokuapp.com?url="
        axios.get(`${serverUrl}https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeid}&fields=name,rating,address_component,photo&key=${process.env.REACT_APP_GOOGLEPLACEKEY_T}`).then(res => {
            if (res.data.result.photos) {
                const photoReference = res.data.result.photos[0].photo_reference
                this.setState(prevState => ({
                    placeData: res.data.result,
                    imageData: photoReference
                }))
            }
        }).catch(err => {
            console.log(err)
        })
    }



    render() {
        console.log(this.state.imageData)
        return (
            <NearbyDataProvider.Provider
                value={{
                    ...this.state,
                    getPlaceData: this.getPlaceData,
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
            value => < C  {...props} {...value} />
        }
    </NearbyDataProvider.Consumer>
)
