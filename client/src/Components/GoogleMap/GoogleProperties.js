import React from "react"
import { withGoogleData } from "../../Context/NearbyData"
import axios from "axios"

class GoogleProperties extends React.Component {
    constructor() {
        super()
        this.state = {
            placeData: {},
            imageData: "",
        }
    }

    componentDidMount() {
        this.getPlaceData(this.props.place_id)
    }


    getPlaceData = (placeid) => {
        const serverUrl = "https://vschool-cors.herokuapp.com?url="
        axios.get(`${serverUrl}https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeid}&fields=name,rating,address_component,photo&key=${process.env.REACT_APP_GOOGLEPLACEKEY}`).then(res => {
            // if (res.data.result.photos) {
            const photoReference = res.data.result.photos[0].photo_reference
            this.setState(prevState => ({
                placeData: res.data.result,
                imageData: photoReference
            }, () => {
 
            })
            )
            // }
        }).catch(err => {
            console.log(err)
        })
    }

    render() {

        return (
            <div> 
                    <img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${this.state.imageData}&key=${process.env.REACT_APP_GOOGLEPLACEKEY_T}`} />
            </div>



        )
    }
}

export default withGoogleData(GoogleProperties)
