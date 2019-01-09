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
            }).catch(err => {
                console.log(err)
                console.log(typeof err)
                this.setState({
                    authErr: err.response.data.message
                })
            })
    }

    login = userInfo => {
        userAxios.post('/auth/login', userInfo)
            .then(res => {
                const { user, token } = res.data
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                this.setState({
                    user: user,
                    token: token,
                    isAuthenticated: true
                })
            }).catch(err => {
                console.log(err)
                console.log(typeof err)
                this.setState({
                    authErr: err.response.data.message
                })
            })
        console.log("logged in")
    }

    logOut = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        this.setState({
            user: {},
            token: "",
            isAuthenticated: false
        })
        console.log("Logged out")
    }

    handleError = (err) => {
        this.setState({
            authErr: err
        })
    }
    clearAuthErr = () =>{
        this.setState({
            authErr: ""
        })
    }

    render() {
        console.log(this.state.authErr)
        console.log(this.state.token)
        return (
            <Provider value={{
                signup: this.signup,
                login: this.login,
                logOut: this.logOut,
                clearAuthErr: this.clearAuthErr,
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

//this.handleError(err.res.data.errMsg)