import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { withUser } from '../../Context/UserProvider'
import { withHouses } from '../../Context/SavedHouseProvider'

class House extends Component {
    // constructor(props){
    //     super(props)
    //     this.state ={
    //         user: this.props.user._id,
    //         house: this.props._id
    //     }
    // }

    selectedHouseHandler = () => {
        console.log(`hit selectedHouseHandler: $`)
        this.props.getSelectedHouse(this.props.houseID)
    }

    removeHouseHandler = (userid, houseid) => {
        this.props.removeHouse(userid, houseid)
    }

    componentDidMount() {
        this.props.getUserHouses(this.props.user._id)
        // console.log(this.props)
        // console.log(this.props.user)
    } 

    render() {
        console.log(this.props)
        console.log(this.props.userID)
        console.log(this.props.houseID)
        return (
               
            <div className="listing__container">

                 <div className="listing__image" style={{ backgroundImage: `url(${this.props.main_image})` }} onClick={this.selectedHouseHandler}>
                    <FontAwesomeIcon className="hearts" icon="heart" onClick={this.removeHouseHandler}/>
                </div>
                <div className="listing__texts">
                    <p>{this.props.price}</p>
                    <div className="listing__icons">
                        <p><FontAwesomeIcon icon="bath" /> {this.props.title}</p>
                        <p><FontAwesomeIcon icon="bed" /> {this.props.bedrooms}</p>
                        <p><FontAwesomeIcon icon="home" /> {this.props.area}</p>
                    </div>
                    <p className="listing__address">{this.props.address && this.props.address.slice(0, this.props.address.indexOf(","))}</p>
                    <p className="listing__address">{this.props.address && this.props.address.slice(this.props.address.indexOf(",") + 1, -1)}</p>
                </div>
            </div>
        )
    }
}

export default withUser(withHouses(House))