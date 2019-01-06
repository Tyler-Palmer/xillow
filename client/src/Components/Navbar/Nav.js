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

Modal.defaultStyles.overlay.backgroundColor = 'rgba(1,1,1,0.6)';
Modal.defaultStyles.overlay.zIndex = 100
class Nav extends React.Component {
    constructor() {
        super()
        this.state = {
            modalIsOpen: false,
            isCheckingNav: false,
            isCurious: "",
            checking: false,
            currentChecking: 0
        }
    }

    handleUserCheckingNav = (category, number) => {
        this.setState({
            isCurious: category ? category : "",
            checking: true,
            currentChecking: number
        })
    }

    handleOpenNav = () => {
        this.setState({
            isCheckingNav: true
        })
    }

    handleCloseNav = () => {
        this.setState({
            isCheckingNav: false
        })
    }

    openModal = () => {
        this.setState({ modalIsOpen: true });
    }

    closeModal = () => {
        this.setState({
            modalIsOpen: false,
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
                    <div className="nav-container__bars-container" onClick={this.handleOpenNav}>
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
                            <li className="nav-item" onClick={this.openModal}>
                                <a href="#">Signup</a>
                            </li>
                            <li className="nav-item">
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
                    ariaHideApp={false}>
                    <div>
                        <Signup className="sign-up" closeModal={this.closeModal} />
                    </div>
                </Modal>

                <Modal
                    isOpen={this.state.isCheckingNav}
                    onRequestClose={this.handleCloseNav}
                    ariaHideApp={false}
                    className="nav__modal-pop-up"
                >
                    <div className="nav__small-modal">
                        <h3
                            onClick={() => this.handleUserCheckingNav("myXillow", 1)}>
                            My Xillow
                        <FontAwesomeIcon
                                icon={this.state.currentChecking === 1 ? this.state.checking ? "arrow-up" : "arrow-down" : "arrow-down"} />
                        </h3>
                        {this.state.isCurious === "myXillow" &&
                            <ul>
                                <li>Hello</li>
                            </ul>
                        }

                        <h3
                            onClick={() => this.handleUserCheckingNav("buy", 2)}>
                            Buy
                        <FontAwesomeIcon
                                icon={this.state.currentChecking === 2 ? this.state.checking ? "arrow-up" : "arrow-down" : "arrow-down"} />
                        </h3>
                        {this.state.isCurious === "buy" &&
                            <ul>
                                <li>Buy</li>
                            </ul>
                        }

                        <h3
                            onClick={() => this.handleUserCheckingNav("rent", 3)}>
                            Rent
                        <FontAwesomeIcon icon={this.state.currentChecking === 3 ? this.state.checking ? "arrow-up" : "arrow-down" : "arrow-down"} /
                            ></h3>
                        {this.state.isCurious === "rent" &&
                            <ul>
                                <li>Rent</li>
                            </ul>
                        }

                        <h3
                            onClick={() => this.handleUserCheckingNav("mortgages", 4)}>
                            Mortgages
                        <FontAwesomeIcon icon={this.state.currentChecking === 4 ? this.state.checking ? "arrow-up" : "arrow-down" : "arrow-down"} />
                        </h3>
                        {this.state.isCurious === "mortgages" &&
                            <ul>
                                <li>Mortgages</li>
                            </ul>
                        }

                        <h3
                            onClick={() => this.handleUserCheckingNav("agent", 5)}>
                            Agent Finder
                        <FontAwesomeIcon icon={this.state.currentChecking === 5 ? this.state.checking ? "arrow-up" : "arrow-down" : "arrow-down"} />
                        </h3>
                        {this.state.isCurious === "agent" &&
                            <ul>
                                <li>Agents</li>
                            </ul>
                        }

                    </div>
                </Modal>
            </div>
        )
    }
}

export default Nav

