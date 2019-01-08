import React, { Component } from 'react'
import { withUser } from '../../../Context/UserProvider'
import SignupForm from './SignupForm'

class Signup extends Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: "",
            signInButton: false
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSignup = e => {
        e.preventDefault()
        const userInfo = {
            email: this.state.email,
            password: this.state.password,
            signInButton: true
        }
        this.props.signup(userInfo)
        this.clearInputs()
        console.log(this.props.token)
        if(this.props.token){
            this.props.closeModal()
        }
    }

    handleLogin = e => {
        e.preventDefault()
        const userInfo = {
            email: this.state.email,
            password: this.state.password,
            signInButton: false
        }
        this.props.login(userInfo)
        this.clearInputs()
        console.log(this.props.token)
        if(this.props.token){
            this.props.closeModal()
        }
    }

    clearInputs = () => {
        this.setState({
            email: "",
            password: ""
        })
    }

    signIn = () => {
        this.setState( prevState => ({
            signInButton: !prevState.signInButton
        }))
    }

    render() {
        console.log(this.props.signupModal)
        return (
            <div className="signup-form-container">
                <button onClick={this.props.closeModal}>Close</button>
                <div>
                    {this.props.signupModal ?
                        <h1>Signup</h1>
                        :
                        <h1>Login</h1>
                    }
                </div>
                {this.props.signupModal ?

                    <SignupForm
                        email={this.state.email}
                        password={this.state.password}
                        handleSubmit={this.handleSignup}
                        handleChange={this.handleChange}
                        btnText="SignUp"
                        toggleLogSign={this.props.toggleLogSign}
                        signIn={this.signIn}
                        signInButton={this.state.signInButton}
                        
                    />
                    :
                    <SignupForm
                        email={this.state.email}
                        password={this.state.password}
                        handleSubmit={this.handleLogin}
                        handleChange={this.handleChange}
                        btnText="Login"
                        toggleLogSign={this.props.toggleLogSign}
                        signIn={this.signIn}
                        signInButton={this.state.signInButton}
                    />
                }
                {
                    this.props.authErr ?
                    <p>{this.props.authErr}</p>
                    :
                    ""
                }
            </div>
        )
    }
}

export default withUser(Signup)