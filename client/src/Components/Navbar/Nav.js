import React from "react"
import logo from "../../assets/zillowlogo.png"
import Modal from 'react-modal'
import Signup from './Signup/Signup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const customStyle = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
        zIndex: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        position: 'absolute',
        border: '1px solid #ccc',
        background: '#fff',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '4px',
        outline: 'none',
        padding: '20px',
        height: '50vh',
        width: '30vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'

    }
};

class Nav extends React.Component {
    constructor() {
        super()
        this.state = {
            modalIsOpen: false,
            signup: false,
            login: false
        }
    }

    openSignupModal = () => {
        this.setState({
            modalIsOpen: true,
            signup: true
        })
    }

    openLoginModal = () => {
        this.setState({
            modalIsOpen: true,
            login: true
        })
    }

    closeModal = () => {
        console.log('hey')
        this.setState({
            modalIsOpen: false,
            signup: false,
            login: false
        })
    }

    render() {
        return (
            <div className="nav-container" style={{ position: this.props.currentWidth <= 768 && "relative", height: this.props.currentWidth <= 768 && 0 }}>
                <a className="navbar-brand" href="/">
                    <div className="navbar-brand__image" style={{ backgroundImage: `url(${logo})` }}>
                    </div>
                </a>
                {this.props.currentWidth <= 768 ?
                    <div className="nav-container__bars-container">
                        <p className="nav-container__bars"><FontAwesomeIcon icon="bars" /> </p>
                    </div>
                    :
                    <div className="nav-container__list-container">
                        <ul className="nav-container__list-small-container">
                            <li className="nav-item active">
                                <a href="#">Buy</a>
                            </li>
                            <li className="nav-item">
                                <a href="#">Rent</a>
                            </li>
                            <li className="nav-item">
                                <a href="#">Mortgages</a>
                            </li>
                            <li className="nav-item">
                                <a href="#">Agent Finder</a>
                            </li>
                            <li className="nav-item">
                                <a href="#"> More </a>
                            </li>
                            <li className="nav-item" onClick={this.openSignupModal}>
                                <a href="#">Signup</a>
                            </li>
                            <li className="nav-item" onClick={this.openLoginModal}>
                                <a href="#">Login</a>

                            </li>
                        </ul>
                    </div>
                }
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    className="sign-up-container"
                    style={customStyle}
                    ariaHideApp={false}
                >
                    <div>
                        <Signup className="sign-up"
                            closeModal={this.closeModal}
                            signup={this.state.signup}
                            login={this.state.login} />
                    </div>
                </Modal>
            </div>
        )
    }
}

export default Nav
