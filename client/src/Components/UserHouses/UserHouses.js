import React, { Component } from 'react'
import { withHouses } from '../../Context/SavedHouseProvider'
import { withUser } from '../../Context/UserProvider'
import { Link } from 'react-router-dom'
import House from '../UserHouses/House'

class UserHouses extends Component{
    constructor(){
        super()
        this.state = {
            isChecking: false,
            houseToDelete: ""
        }
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps)
        if(nextProps.user._id && nextProps.savedHouses.length === 0){
            this.props.getUserHouses(nextProps.user._id)
        }
    }

    // handleMouseOver = () => {
    //     this.setState({
    //         isChecking: true,
    //         houseToDelete: this.props.savedHouses._id
    //     })
    //     console.log("Mouse in")
    // }

    // handleMouseLeave = () =>{
    //     this.setState({
    //         isChecking: false
    //     })
    //     console.log("Mouse out")
    // }

    render(){
        console.log(this.props.savedHouses)
        console.log(this.props.houseToDelete)
        return(
            <div className ="saved-container">
                <h2>Welcome @{this.props.user.email}</h2>
                { this.props.numberSaved > 0 &&
                <h5>You have {this.props.numberSaved} saved houses</h5>
                }
                {
                    this.props.savedHouses.length >= 1 &&

                <div className ="saved-container_small">
                {
                    this.props.savedHouses.map(house => <House 
                            houseToDelete = {this.state.houseToDelete}
                            _id={house._id}
                            {...house.listings} />)
                }
                </div>
                }
            </div>
        )
    }
}

export default withUser(withHouses(UserHouses))