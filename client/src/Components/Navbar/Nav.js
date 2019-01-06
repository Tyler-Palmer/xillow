import React from "react"
import logo from "../../assets/zillowlogo.png"
import Modal from 'react-modal'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

class Nav extends React.Component {
    constructor() {
        super()
        this.state = {
            modalIsOpen: false
        }
    }

    openModal = () => {
        this.setState({ modalIsOpen: true });
    }

    closeModal = () => {
        this.setState({ modalIsOpen: false });
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
                                style={customStyles}
                                contentLabel="Example Modal"
                                error="false"
                            >
                            </Modal>
                        </li>
                        <li className="nav-item" onClick={this.openModal}>
                            <a href="#">Login</a>
                            <Modal
                                isOpen={this.state.modalIsOpen}
                                onRequestClose={this.closeModal}
                                style={customStyles}
                                contentLabel="Example Modal"
                                error="false"
                            >
                            </Modal>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Nav