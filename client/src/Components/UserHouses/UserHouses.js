import React, { Component, Fragment } from 'react'
import { withHouses } from '../../Context/SavedHouseProvider'
import { withUser } from '../../Context/UserProvider'
import House from '../UserHouses/House'
import { Link } from 'react-router-dom'
import SubSearch from './../Search/SubSearch'

class UserHouses extends Component{
    constructor(props){
        super(props)
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

    componentDidMount(){
        this.props.getUserHouses(this.props.user._id)
        this.props.numberHousesSaved()
    }

    render(){

        return(
            <Fragment>
            <SubSearch />
            <div className ="saved-container">
                <h2>Welcome @{this.props.user.email}</h2>
                { this.props.numberSaved > 0 &&
                <h5>You have {this.props.numberSaved} saved houses</h5>
                }
                {
                    this.props.savedHouses.length >= 1 &&

                <div className ="saved-container_small">
                {
                    this.props.savedHouses.map((house,index) => <Link to={`/search/${house._id}`}><House
                            getSelectedHouse ={this.props.getSelectedHouse} 
                            houseToDelete = {this.state.houseToDelete}
                            userID = {this.props.user._id}
                            houseID= {house._id}
                            key={index}
                            {...house.listings} /></Link>)
                }
                </div>
                }
            </div>
            </Fragment>
        )
    }
}

export default withUser(withHouses(UserHouses))