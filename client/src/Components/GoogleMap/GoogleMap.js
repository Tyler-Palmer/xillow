import React, { Component, Fragment } from "react";
import GoogleMapReact from "google-map-react";
import { withGoogleData } from "../../Context/NearbyData";
import { withServerListing } from "../../Context/ServerListingContext";
import GoogleIcon from "./GoogleIcons"
import GoogleProperties from "./GoogleProperties"
import GoogleProperty from "./GoogleProperty"

class GoogleMap extends Component {
    constructor(props) {
        super(props)
        this.center = {
            lat: 0,
            lng: 0
        }
        this.zoom = 10
    }

    componentDidMount() {
        this.props.displayListingsData()
    }

    componentWillReceiveProps(nextProps) {
        this.center = {
            lat: nextProps.latitude,
            lng: nextProps.longitude
        }
    }

    render() {
        console.log(this.props.newListingData)
        return (
            <Fragment>
                {this.center.lat > 1 &&
                    <div className="google-map__container">
                        <div style={{ height: "100vh", width: "50vw" }}>
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLEKEY }}
                                defaultCenter={this.center}
                                defaultZoom={this.zoom}
                            >
                                <GoogleIcon
                                    lat={this.center.lat}
                                    lng={this.center.lng}
                                    house={true} />
                                {this.props.newListingData.map(each => <GoogleIcon lng={each.longtitude} lat={each.latitude} house={true} />)}
                            </GoogleMapReact>
                        </div>
                        <div className="google-property__detailed-container">
                            <div className = "salt-lake-city">
                                <p>Homes at Salt Lake City:</p>
                            </div>
                            <div className="google-property__container">
                                {this.props.newListingData.map(each => <GoogleProperty {...each} />)}
                            </div>
                        </div>
                    </div>
                }

            </Fragment>
        )
    }
}

export default withServerListing(withGoogleData(GoogleMap));

{/* console.log(each)

                    console.log(each.geometry.location)
                    console.log(typeof each.geometry.location.lat)
                    console.log(typeof each.geometry.location.lng) */}

{/* {this.props.nearbyInfos.length > 1 && this.props.nearbyInfos.map(each => console.log)} */ }
                     // {this.props.nearbyInfos.map(each => <GoogleIcon lat ={each.geometry.location.lat} lng = {each.geometry.location.lng} icon = {each.icon}/>)}  

                     //{this.props.nearbyInfos.map(each => <GoogleProperties {...each} />)}