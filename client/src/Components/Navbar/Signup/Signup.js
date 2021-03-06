import React, { Component } from 'react'
import { withUser } from '../../../Context/UserProvider'
import SignupForm from './SignupForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';

class Signup extends Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: "",
            signInButton: false
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        if (nextProps.token) {
            this.props.closeModal()
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
        console.log(this.props.token)
        if (this.props.token) {
            this.props.closeModal()
        }
        this.clearInputs()
        this.props.handleCloseNav()
    }

    handleLogin = e => {
        e.preventDefault()
        const userInfo = {
            email: this.state.email,
            password: this.state.password,
            signInButton: false
        }
        this.props.login(userInfo)
        console.log(this.props.token)
        this.clearInputs()
        this.props.handleCloseNav()
    }

    clearInputs = () => {
        this.setState({
            email: "",
            password: ""
        })
    }

    signIn = () => {
        this.setState(prevState => ({
            signInButton: !prevState.signInButton
        }))
    }

    render() {
        return (
            <div className="signup-form-container">
                <div id="close-container">
                    <button id="close-container-button" onClick={this.props.closeModal}>
                        <FontAwesomeIcon className="window-close" icon={faWindowClose}/>
                    </button>
                </div>
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
                        <p id="error-display">{this.props.authErr}</p>
                        :
                        ""
                }
            </div>
        )
    }
}

export default withUser(Signup)