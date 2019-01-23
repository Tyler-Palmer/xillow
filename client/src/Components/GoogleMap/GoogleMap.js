import React, { Component, Fragment } from "react";
import GoogleMapReact from "google-map-react";
import { withGoogleData } from "../../Context/NearbyData";
import { withServerListing } from "../../Context/ServerListingContext";
import GoogleIcon from "./GoogleIcons"
import GoogleProperty from "./GoogleProperty"

class GoogleMap extends Component {
    constructor(props) {
        super(props)
        this.state = {
            atThePage: 1
        }
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

    handlePagination = (id) => {
        this.props.getListingData(id)
        this.setState({
            atThePage: id
        })
    }

    render() {
        const pagination = []
        for (let i = 1; i <= this.props.pages; i++) {
            pagination.push(i)
        }
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
                                {this.props.newListingData.map(each => <GoogleIcon {...each} lng={each.longtitude} lat={each.latitude} house={true} />)}
                            </GoogleMapReact>
                        </div>
                        <div className="google-property__detailed-container">
                            <div className="salt-lake-city">
                                <p>Homes in Salt Lake City:</p>
                            </div>
                            <div className="google-property__container">
                                {this.props.newListingData.map(each => <GoogleProperty {...each} />)}
                            </div>
                            <div className="pagination__section">
                                {pagination.map((each, id) => <p style ={{color: this.state.atThePage === id + 1 ? "darkCyan" : ""}} onClick = {() => this.handlePagination(id+1)}>{each}</p>)}
                            </div>
                        </div>
                    </div>
                }

            </Fragment>
        )
    }
}

export default withServerListing(withGoogleData(GoogleMap));

