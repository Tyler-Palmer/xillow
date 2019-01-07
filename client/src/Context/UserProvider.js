import React, { Component } from 'react'
import axios from 'axios'

const { Consumer, Provider } = React.createContext()

class UserProvider extends Component {
    constructor() {
        super()
        this.state = {
            allUsers: [],
            user: {},
            isAuthenticated: false,
            authErr: "",
            token: ""
        }
    }

    signup = userInfo => {
        axios.post('/auth/signup', userInfo)
            .then(res => {
                const { user, token } = res.data
                 // On successful signup/login, add user object to localstorage
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                this.setState({
                    user: user,
                    token: token,
                    isAuthenticated: true
                })
                //Pass on response so that it can be used again
                return res
            }).catch(err => this.handleError(err.res.data.errMsg))
    }
    
    login = userInfo => {
        axios.post('/auth/login', userInfo)
        .then(res => {
            const { user, token } =res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            this.setState({
                user: user,
                token: token,
                isAuthenticated: true
            })
        })
    }

    handleError = (err) => {
        this.setState({
            authErr: err
        })
    }
    render() {
        return (
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