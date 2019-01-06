import React from "react"
import homeVideo from "../../assets/home-video.mp4"
import leggyGirl from "../../assets/leggy-girl.mp4"
import firePits from "../../assets/fire-pits.mp4"
import { withSearchData } from "../../Context/SearchProvider"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Header extends React.Component {
    constructor() {
        super()
        this.state = {
            isActive: 1,
            slideNumber: 0,
            texts: ["Find your way home", "Find your next rental", "Your Home on Xillow"],
            videos: [homeVideo, leggyGirl, firePits],
            address: "",
        }
        this.myRef = React.createRef()
    }

    handleUserSearchInput = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value 
        })
    }

    handleUserSearchSubmit = (e) => {
        e.preventDefault()
        this.props.history.push('/search')
    }

    handleSlide = (activeNumber, slideNumber) => {
        this.setState({
            isActive: activeNumber,
            slideNumber
        }, () => {
            //Help to reload the video
            this.refs.video.load();
        })
    }

    render() {
        return (
            <div className="header-container">
                <div className="header-small-container">
                    <div className="header-small-container__search">
                        <div className="header-small-container__form">
                            <h1>{this.state.texts[this.state.slideNumber]}</h1>
                            <div className="header-small-container__buttons">
                                <button
                                    className="transparent-button"
                                    onClick={() => this.handleSlide(1, 0)}
                                    style={{ backgroundColor: this.state.isActive === 1 && "rgba(0,116,228,0.7)" }}>
                                    Buy
                                    </button>
                                <button
                                    className="transparent-button"
                                    onClick={() => this.handleSlide(2, 1)}
                                    style={{ backgroundColor: this.state.isActive === 2 && "rgba(0,116,228,0.7)" }}>
                                    Rent
                                    </button>
                                <button
                                    className="transparent-button"
                                    onClick={() => this.handleSlide(3, 2)}
                                    style={{ backgroundColor: this.state.isActive === 3 && "rgba(0,116,228,0.7)" }}>
                                    Xestimate
                                    </button>
                            </div>
                            <form onSubmit = {this.handleUserSearchSubmit}>

                                <input
                                name= "address"
                                value = {this.state.address}
                                onChange = {this.handleUserSearchInput}
                                placeholder="Enter an adress, neighborhood, city, or ZIP code" />

                                <button><FontAwesomeIcon icon="search" /></button>
                            </form>
                        </div>
                    </div>
                    <video className="header-small-container__image" loop autoPlay ref="video">
                        <source src={this.state.videos[this.state.slideNumber]} type="video/mp4" />
                        <source src={this.state.videos[this.state.slideNumber]} type="video/ogg" />
                    </video>
                </div>
            </div >
        )
    }
}

export default withSearchData(Header);