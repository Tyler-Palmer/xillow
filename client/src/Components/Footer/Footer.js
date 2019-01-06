import React from "react"
import SubFooter from "./SubFooter"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Footer extends React.Component {
    constructor() {
        super()
        this.state = {
            //Create list to map --- "Do not repeat yourself" 
            list: [
                { name: "Real Estate", firstList: "Browse all homes", secondList: "Albuquerque real estate", thirdList: "Atlanta real estate", fourthList: "Austin real estate", fiflthList: "Baltimore real estate" },
                { name: "Rentals", firstList: "Rental Buildings", secondList: "Atlanta apartments for rent", thirdList: "Austin apartments for rent", fourthList: "Baltimore apartments for rent", fiflthList: "Boston apartments for rent" },
                { name: "Mortgage Rates", firstList: "Current mortgage rates", secondList: "Alaska mortgage rates", thirdList: "Alabama mortgage rates", fourthList: "Arkansas mortgage rates", fiflthList: "Arizona mortgage rates" },
                { name: "Browse Homes", firstList: "California", secondList: "Texas", thirdList: "New York", fourthList: "Florida", fiflthList: "Illinois" }
            ]
        }
    }
    render() {
        console.log(this.props.currentWidth)
        return (
            <div>
                <div className="sub-footer__container">
                    {this.state.list.map(each => <SubFooter {...each} />)}
                </div>
                <div className="footer-infos__container">
                    <ul className="xillow-group__container">
                        <li className= {this.props.currentWidth <= 560 ? "xillow-group__brand" : ""}><p>Xillow Group®Brands:</p></li>
                        <li>Trulia</li>
                        <li>StreeEasy</li>
                        <li>HotPads</li>
                        <li>Naked Apartments</li>
                        <li>RealEstate.com</li>
                        <li>Out East</li>
                    </ul>
                    <ul className="xillow-quick-links__container">
                        <li>ABOUT</li>
                        <li>ZESTIMATES</li>
                        <li>RESEARCH</li>
                        <li>HELP</li>
                        <li>TERMS OF USE & PRIVACY</li>
                        <li>AD CHOICE</li>
                        <li>BLOG</li>
                    </ul>
                    <hr />
                    <ul className="xillow-copy-right__container">
                        <li className="xillow__home">
                            <p><FontAwesomeIcon icon="home" /></p>
                        </li>
                        <li className="xillow__copyright">
                            <p><FontAwesomeIcon icon="copyright" />Xillow 2018-2019</p>
                        </li>
                        <li className="xillow__brands">
                            <p><FontAwesomeIcon icon={['fab', 'facebook']} /></p>
                            <p><FontAwesomeIcon icon={['fab', 'twitter']} /></p>
                            <p><FontAwesomeIcon icon={['fab', 'google-plus']} /></p>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer;