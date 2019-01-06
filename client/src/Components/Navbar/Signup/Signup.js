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

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.signup(this.state)
        .then(() => this.props.history.push("/auth"))
    }

    toggler = () => {
        this.setState({
            toggle: !toggle
        })
    }

    clearInputs = () => {
        this.setState({
            email: "",
            password: ""
        })
    }

    render() {
        return (
            <div className="signup-form-container">
                <SignupForm 
                    email= {this.state.email}
                    password = {this.state.password}
                    handleSubmit = {this.state.handleSubmit}
                    handleChange = {this.handleChange}/>
            </div>
        )
    }
}

export default withUser(Signup)