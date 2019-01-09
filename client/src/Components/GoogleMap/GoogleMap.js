import React, { Component, Fragment } from "react";
import GoogleMapReact from "google-map-react";
import { withGoogleData } from "../../Context/NearbyData"
import GoogleIcon from "./GoogleIcons"
import GoogleProperties from "./GoogleProperties"

class GoogleMap extends Component {
    constructor(props) {
        super(props)
        this.center = {
            lat: 0,
            lng: 0
        }
        this.zoom = 10
    }

    componentWillReceiveProps(nextProps) {
        this.center = {
            lat: nextProps.latitude,
            lng: nextProps.longitude
        }
    }

    render() {
        return (
            <Fragment>
                {this.center.lat > 1 &&
                    <div style={{ height: "100vh", width: "50vw" }}>
                        < GoogleMapReact
                            bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLEKEY }}
                            defaultCenter={this.center}
                            defaultZoom={this.zoom}
                        >
                        <GoogleIcon
                                lat={this.center.lat}
                                lng={this.center.lng}
                                house = {true} />

                        {this.props.nearbyInfos.map(each => <GoogleIcon lat ={each.geometry.location.lat} lng = {each.geometry.location.lng} icon = {each.icon}/>)}        
                        </GoogleMapReact>
                    </div>
                }
                <div>
                    {this.props.nearbyInfos.map(each => <GoogleProperties {...each}/>)}
                </div>
            </Fragment>
        )
    }
}

export default withGoogleData(GoogleMap);

{/* console.log(each)
                    console.log(each.geometry.location)
                    console.log(typeof each.geometry.location.lat)
                    console.log(typeof each.geometry.location.lng) */}

                        {/* {this.props.nearbyInfos.length > 1 && this.props.nearbyInfos.map(each => console.log)} */}