import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

class GoogleMap extends Component{
    static default = {
        center: {
            lat: this.props.lat || 59.9,
            long: this.props.long || 30.33,
        },
        zoom: 15
    }
    render(){
        return(
            <div style = {{height: "100vh", width: "50vw"}}>
                <GoogleMapReact 
                bootstrapURLKeys = {{key: process.env.REACT_APP_GOOGLEKEY}}
                defaultCenter = {this.props.center}
                defaultZoom = {this.props.zoom}
                >

                </GoogleMapReact>
            </div>
        )
    }
}

export default GoogleMap