import React from "react"
import { withGoogleData } from "../../Context/NearbyData"

class GoogleProperties extends React.Component {
    componentDidMount(){
        this.props.getPlaceData(this.props.place_id)
    }
    render() {
        console.log(this.props)
        return (
            <div>
                {this.props.imageData &&
                    <img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${this.props.imageData}&key=${process.env.REACT_APP_GOOGLEPLACEKEY}`}/>
                }
            </div>
        )
    }
}

export default withGoogleData(GoogleProperties)

 {/* <div className = "google-property" style ={{backgroundImage: `url(${this.props.imageData})`}}> */}
                {/* </div> */}