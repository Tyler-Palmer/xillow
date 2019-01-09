import React, { Fragment } from "react"
import logo from "../../assets/zillowlogo.png"
import Modal from 'react-modal'
import Signup from './Signup/Signup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { withUser } from '../../Context/UserProvider'

const customStyle = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
        zIndex: 150,
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
            signupModal: false,
            loginModal: false,
            isCheckingNav: false,
            isCurious: "",
            checking: false,
            currentChecking: 0
        }
    }

    openSignupModal = () => {
        this.setState({
            modalIsOpen: true,
            signupModal: true
        })
    }

    openLoginModal = () => {
        this.setState({
            modalIsOpen: true,
            loginModal: true
        })
    }

    handleUserCheckingNav = (category, number) => {
        this.setState({
            isCurious: category ? this.state.isCurious === category ? "" : category : "",
            currentChecking: number
        }, () => {
            this.setState({
                checking: this.state.isCurious && true,
            })
        })
    }


    handleOpenNav = () => {
        this.setState({
            isCheckingNav: true
        })
    }

    handleCloseNav = () => {
        this.setState({
            isCheckingNav: false,
            isCurious: "",
            checking: false,
            currentChecking: 0
        })
    }

    openModal = () => {
        this.setState({ modalIsOpen: true });
    }

    closeModal = () => {
        this.setState({
            modalIsOpen: false,
            signupModal: false,
            loginModal: false
        })
        this.props.clearAuthErr()
    }


    toggleLogSign = () => {
        console.log('togglelogsign works')
        this.setState(prevState => ({
            signupModal: !prevState.signupModal,
            loginModal: !prevState.signupModal,
        }))
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

                            {
                                this.props.isAuthenticated ?
                                    ""
                                    :
                                    <li className="nav-item" onClick={this.openSignupModal}>
                                        <a href="#">Signup</a>
                                    </li>
                            }
                            {
                                this.props.isAuthenticated ?
                                    ""
                                    :
                                    <li className="nav-item" onClick={this.openLoginModal}>
                                        <a href="#">Login</a>
                                    </li>
                            }
                            {
                                this.props.isAuthenticated ?
                                    <li className="nav-item" onClick={this.props.logOut}>
                                        <a href="#">Log out</a>
                                    </li>
                                    :
                                    ""
                            }
                        </ul>
                    </div>
                }
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    className="sign-up-container"
                    style={customStyle}
                    ariaHideApp={false}
                    overlayClassName="Overlay">

                    <Signup className="sign-up"
                        closeModal={this.closeModal}
                        signupModal={this.state.signupModal}
                        loginModal={this.state.loginModal}
                        toggleLogSign={this.toggleLogSign}
                        handleCloseNav={this.handleCloseNav} />
                </Modal>

                <Modal
                    isOpen={this.state.isCheckingNav}
                    onRequestClose={this.handleCloseNav}
                    ariaHideApp={false}
                    className="nav__modal-pop-up">
                    <div className="nav__small-modal">
                        <h3
                            style={{ backgroundColor: this.state.isCurious && this.state.currentChecking === 1 && "rgba(82, 179, 217, 1)", color: this.state.isCurious && this.state.currentChecking === 1 && "white" }}
                            onClick={() => this.handleUserCheckingNav("myXillow", 1)}>
                            <FontAwesomeIcon
                                className="arrow-icons"
                                icon={this.state.currentChecking === 1 ? this.state.checking ? "arrow-up" : "arrow-down" : "arrow-down"} />
                            My Xillow
                        </h3>
                        {
                            this.props.isAuthenticated ?
                                <Fragment>
                                    {this.state.isCurious === "myXillow" &&
                                        <ul>
                                            <li onClick={this.props.logOut}>Log Out</li>
                                        </ul>
                                    }
                                </Fragment>
                                :
                                <Fragment>
                                    {this.state.isCurious === "myXillow" &&
                                        <ul>
                                            <li onClick={this.openSignupModal}>Sign up</li>
                                        </ul>
                                    }
                                    {this.state.isCurious === "myXillow" &&
                                        <ul>
                                            <li onClick={this.openLoginModal}>Login</li>
                                        </ul>
                                    }
                                </Fragment>
                        }
                        <h3
                            style={{ backgroundColor: this.state.isCurious && this.state.currentChecking === 2 && "rgba(82, 179, 217, 1)", color: this.state.isCurious && this.state.currentChecking === 2 && "white" }}
                            onClick={() => this.handleUserCheckingNav("buy", 2)}>
                            <FontAwesomeIcon
                                className="arrow-icons"
                                icon={this.state.currentChecking === 2 ? this.state.checking ? "arrow-up" : "arrow-down" : "arrow-down"} />
                            Buy
                        </h3>
                        {this.state.isCurious === "buy" &&
                            <ul>
                                <li>Buy</li>
                            </ul>
                        }

                        <h3
                            style={{ backgroundColor: this.state.isCurious && this.state.currentChecking === 3 && "rgba(82, 179, 217, 1)", color: this.state.isCurious && this.state.currentChecking === 3 && "white" }}
                            onClick={() => this.handleUserCheckingNav("rent", 3)}>
                            <FontAwesomeIcon
                                className="arrow-icons"
                                icon={this.state.currentChecking === 3 ? this.state.checking ? "arrow-up" : "arrow-down" : "arrow-down"} />
                            Rent
                            </h3>
                        {this.state.isCurious === "rent" &&
                            <ul>
                                <li>Rent</li>
                            </ul>
                        }

                        <h3
                            style={{ backgroundColor: this.state.isCurious && this.state.currentChecking === 4 && "rgba(82, 179, 217, 1)", color: this.state.isCurious && this.state.currentChecking === 4 && "white" }}
                            onClick={() => this.handleUserCheckingNav("mortgages", 4)}>
                            <FontAwesomeIcon
                                className="arrow-icons"
                                icon={this.state.currentChecking === 4 ? this.state.checking ? "arrow-up" : "arrow-down" : "arrow-down"} />
                            Mortgages
                        </h3>
                        {this.state.isCurious === "mortgages" &&
                            <ul>
                                <li>Mortgages</li>
                            </ul>
                        }

                        <h3
                            style={{ backgroundColor: this.state.isCurious && this.state.currentChecking === 5 && "rgba(82, 179, 217, 1)", color: this.state.isCurious && this.state.currentChecking === 5 && "white" }}
                            onClick={() => this.handleUserCheckingNav("agent", 5)}>
                            <FontAwesomeIcon
                                className="arrow-icons"
                                icon={this.state.currentChecking === 5 ? this.state.checking ? "arrow-up" : "arrow-down" : "arrow-down"} />
                            Agent Finder
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

export default withUser(Nav);
