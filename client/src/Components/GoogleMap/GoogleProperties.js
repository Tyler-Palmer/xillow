import React from "react"
import { withGoogleData } from "../../Context/NearbyData"

class GoogleProperties extends React.Component {
    componentDidMount(){
        this.props.getPlaceData(this.props.place_id)
        console.log(this.props.place_id)
    }
    render() {
        return (
            <div>
                <h2>Hello</h2>
            </div>
        )
    }
}

export default withGoogleData(GoogleProperties)