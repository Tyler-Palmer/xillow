import React from "react"
import logo from "../../assets/zillowlogo.png"
import Modal from 'react-modal'
import Signup from './Signup/Signup'

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
            hey: "hey"
        }
    }

    openModal = () => {
        this.setState({ modalIsOpen: true });
    }
    // openModal2 = () => {
    //     this.setState({ modal2IsOpen: true });
    // }

    closeModal = (id) => {
        console.log(id)
        this.setState({
            modalIsOpen: false,
            hey: "not hey"
        }, () => {
            console.log(this.state.hey)
            console.log(this.state.modalIsOpen)
        });

    }

    render() {
        return (
            <div className="nav-container">
                <a className="navbar-brand" href="/">
                    <div className="navbar-brand__image" style={{ backgroundImage: `url(${logo})` }}>
                    </div>
                </a>
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
                            <Modal
                                isOpen={this.state.modalIsOpen}
                                onRequestClose={this.closeModal}
                                className="sign-up-container"
                                style={customStyle}
                                ariaHideApp={false}
                            >
                                <div>
                                    <Signup className="sign-up" closeModal={this.closeModal} />
                                </div>
                            </Modal>
                        </li>
                        <li className="nav-item" onClick={this.openModal2}>
                            <a href="#">Login</a>
                            {/* <Modal
                                isOpen={this.state.modalIsOpen}
                                onRequestClose={this.closeModal}
                                contentLabel="Example Modal"
                                error="false"
                                ariaHideApp={false}
                            >
                            </Modal> */}
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Nav


// style={customStyles}