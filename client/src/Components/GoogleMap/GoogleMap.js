import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { withGoogleData } from "../../Context/NearbyData"

class GoogleMap extends Component {
    static default = {
        zoom: 15
    }

    render() {
        return (
            <div style={{ height: "100vh", width: "50vw" }}>
                {this.props.nearbyInfos.map(each =>
                    < GoogleMapReact
                        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLEKEY }}
                        defaultCenter={each.geometry.location}
                        defaultZoom={this.props.zoom}
                    >
                    </GoogleMapReact>
                )}
            </div>
        )
    }
}

export default withGoogleData(GoogleMap);