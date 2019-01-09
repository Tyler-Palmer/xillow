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

    getNearbyLocationData = (lat, long) => {
        axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${long}&rankby=distance&type=food&key=${process.env.REACT_APP_GOOGLEKEY}`).then(res =>{
            console.log(res)
            const nearbyInfos = res.data.results
            this.setState({
                nearbyInfos
            })
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