import React, { Component } from 'react'
import axios from 'axios'

const { Consumer, Provider } = React.createContext()

class UserProvider extends Component{
    constructor(){
        super()
        this.state = {
            users: [],
            houses: [],
            activeUser: {},
            token: ""
        }
    }

    signup = (userInfo) => {
        return axios.post('/auth/signup', userInfo)
        .then(response => {
            const { user, token } =response.data
            this.setState({
                activeUser: user,
                token: token
            })
            //Pass on response so that it can be used 
            return response
        })
    }
    render(){
        return(
            <Provider value={{
                    signup: this.signup,
                    ...this.state
            }}>
                {this.props.children}
            </Provider>
        )
    } 
}

export const withUser = C => props => (
    <Consumer>
        {value => <C {...props} {...value} />}
    </Consumer>
)

export default UserProvider