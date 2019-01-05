import React, { Component } from 'react'
import axios from 'axios'

class UserProvider extends Component{
    constructor(){
        super()
        this.state = {
            users: [],
            activeUser: {},
            token: ""
        }
    }
    render(){
        return(
            <div>

            </div>
        )
    } 
}

export default UserProvider