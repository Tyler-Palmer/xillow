import React, { Component } from 'react'
import { withUser } from '../../../Context/UserProvider'
import SignupForm from './SignupForm'

class Signup extends Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: "",
            toggle: false
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSignup= e => {
        e.preventDefault()
        const userInfo = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.signup(userInfo)
        this.clearInputs()
        this.props.closeModal()
    }

    handleLogin = e => {
        e.preventDefault()
        const userInfo = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.login(userInfo)
        this.clearInputs()
        this.props.closeModal()
    }

    toggler = () => {
        this.setState( prevState => ({
            toggle: !prevState.toggle
        })
    )}

    clearInputs = () => {
        this.setState({
            email: "",
            password: ""
        })
    }

    render() {
        return (
            <div className="signup-form-container">
                <button onClick={this.props.closeModal}>Close</button>
                <SignupForm 
                    email= {this.state.email}
                    password = {this.state.password}
                    handleSubmit = {this.handleSignup}
                    handleChange = {this.handleChange}
                    btnText = "SignUp" 
                   />
                
            </div>
        )
    }
}

export default withUser(Signup)