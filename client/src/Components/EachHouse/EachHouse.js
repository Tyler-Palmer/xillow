import React from "react";
import axios from "axios";
import { withHouses } from "../../Context/SavedHouseProvider";
import { withUser } from "../../Context/UserProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

class EachHouse extends React.Component {
    constructor() {
        super();
        this.state = {
            houseData: {}
        };
    }

    componentWillReceiveProps(nextProps) {
        console.log(`EachHouse: ${nextProps}`);
        // this.props.getSelectedHouse()
    }

    componentDidMount() {
        axios
            .get(`/listing/listings/${this.props.match.params.id}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
                this.setState({
                    houseData: res.data
                });
            });
    }

    render() {
        console.log(this.props);
        return (
            <div className="each-house__container">
                {this.props.isAuthenticated && (
                    <Link to="/savedHouses" className="return-box">
                        <div className="back-button">
                            <FontAwesomeIcon className="return" icon="arrow-alt-circle-left" />
                            <h1>Back</h1>
                        </div>
                    </Link>
                )}
                {this.state.houseData && this.state.houseData.listings && (
                    <div className="each-house__small-container">
                        <div className="each-house__address-price-container">
                            <div>
                                <h4 className="each-house__address">
                                    {this.state.houseData.listings.address.slice(
                                        0,
                                        this.state.houseData.listings.address.indexOf(
                                            ","
                                        )
                                    )}
                                </h4>
                                <p className="each-house__address">
                                    {this.state.houseData.listings.address.slice(
                                        this.state.houseData.listings.address.indexOf(
                                            ","
                                        ) + 1,
                                        -1
                                    )}
                                </p>
                            </div>
                            <div>
                                <h3>{this.state.houseData.listings.price}</h3>
                                <div className="each-house__nessecity">
                                    <p>
                                        <FontAwesomeIcon icon="bed" />{" "}
                                        {this.state.houseData.listings.bedrooms}
                                    </p>
                                    <p>
                                        <FontAwesomeIcon icon="bath" />{" "}
                                        {this.state.houseData.listings.title}
                                    </p>
                                    <p>
                                        <FontAwesomeIcon icon="home" />
                                        {this.state.houseData.listings.area}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="each-house__images">
                            <div
                                className="each-house__image"
                                style={{
                                    backgroundImage: `url(${
                                        this.state.houseData.listings.main_image
                                    })`
                                }}
                            />
                        </div>
                        <div className="each-house__overview">
                            <p>{this.state.houseData.listings.viewing_time}</p>
                            <p>
                                Over View:{" "}
                                {
                                    this.state.houseData.listings
                                        .property_overview
                                }
                            </p>
                            <p>
                                Description:{" "}
                                {this.state.houseData.listings.description}
                            </p>
                        </div>
                        <div className="each-house__advantages">
                            <p>
                                <FontAwesomeIcon
                                    icon="bus"
                                    className="each-house__advantage"
                                />{" "}
                                {this.state.houseData.listings.transit_score}
                            </p>
                            <p>
                                <FontAwesomeIcon
                                    icon="bicycle"
                                    className="each-house__advantage"
                                />{" "}
                                {this.state.houseData.listings.biking_score}
                            </p>
                            <p>
                                <FontAwesomeIcon
                                    icon="walking"
                                    className="each-house__advantage"
                                />{" "}
                                {this.state.houseData.listings.walk_score}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default withUser(withHouses(EachHouse));
