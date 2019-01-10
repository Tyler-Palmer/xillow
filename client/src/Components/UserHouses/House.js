import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { withUser } from '../../Context/UserProvider'
import { withHouses } from '../../Context/SavedHouseProvider'

class House extends Component {

    componentDidMount() {
        this.props.getSelectedHouse(this.props.match.params.id, this.props.user._id)
        console.log()
    }

    render() {
        return (
            <div className="listing__container">

                 <div className="listing__image" style={{ backgroundImage: `url(${this.props.listings.main_image})` }}>
                </div>
                <div className="listing__texts">
                    <p>{this.props.listings.price}</p>
                    <div className="listing__icons">
                        <p><FontAwesomeIcon icon="bath" /> {this.props.listings.title}</p>
                        <p><FontAwesomeIcon icon="bed" /> {this.props.listings.bedrooms}</p>
                        <p><FontAwesomeIcon icon="home" /> {this.props.listings.area}</p>
                    </div>
                    <p className="listing__address">{this.props.listings.address.slice(0, this.props.listings.address.indexOf(","))}</p>
                    <p className="listing__address">{this.props.listings.address.slice(this.props.listings.address.indexOf(",") + 1, -1)}</p>
                </div>
            </div>
        )
    }
}

export default withUser(withHouses(House))