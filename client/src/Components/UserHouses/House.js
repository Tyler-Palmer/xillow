import React, { Component, Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { withUser } from '../../Context/UserProvider'
import { withHouses } from '../../Context/SavedHouseProvider'

class House extends Component {

    componentDidMount() {
        this.props.getUserHouses(this.props.user._id)
        // console.log(this.props)
        // console.log(this.props.user)
    }

    render() {
        console.log(this.props)
        console.log(this.props._id)
        console.log(this.props.user._id)
        return (
               
            <div className="listing__container">

                 <div className="listing__image" style={{ backgroundImage: `url(${this.props.main_image})` }}>
                    <FontAwesomeIcon className="hearts" icon="heart" onClick={() => this.props.removeHouse(this.props.user._id, this.props._id)}/>
                </div>
                <div className="listing__texts">
                    <p>{this.props.price}</p>
                    <div className="listing__icons">
                        <p><FontAwesomeIcon icon="bath" /> {this.props.title}</p>
                        <p><FontAwesomeIcon icon="bed" /> {this.props.bedrooms}</p>
                        <p><FontAwesomeIcon icon="home" /> {this.props.area}</p>
                    </div>
                    <p className="listing__address">{this.props.address.slice(0, this.props.address.indexOf(","))}</p>
                    <p className="listing__address">{this.props.address.slice(this.props.address.indexOf(",") + 1, -1)}</p>
                </div>
            </div>
        )
    }
}

export default withUser(withHouses(House))