import React, { Component } from 'react'
import { withHouses } from '../../Context/SavedHouseProvider'

class UserHouses extends Component{
    componentDidMount(){
        this.props.getUserHouses()
    }
    render(){
        return(
            <div>

            </div>
        )
    }
}

export default withHouses(UserHouses)