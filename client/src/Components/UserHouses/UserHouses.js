import React, { Component } from 'react'
import { withHouses } from '../../Context/SavedHouseProvider'

class UserHouses extends Component{
    componentDidMount(){
        this.props.getUserHouses(`5c33c92a04987a7048f6c6d4`)
    }
    render(){
        return(
            <div>

            </div>
        )
    }
}

export default withHouses(UserHouses)