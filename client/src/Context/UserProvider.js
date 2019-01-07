import React, { Component } from 'react'
import axios from 'axios'

const { Consumer, Provider } = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

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
        userAxios.post('/auth/signup', userInfo)
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
        userAxios.post('/auth/login', userInfo)
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

    logOut = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        this.setState({
            user: {},
            token: ""
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
                login: this.login,
                logout: this.logOut,
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