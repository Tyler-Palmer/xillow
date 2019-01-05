import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TestimonySlider = (props) => {
    console.log(props.slide)
    return (
        <div className={`customer-testimony__small-container ${props.slide === props.id ? "is-selected" : "not-selected"}`}>
            <div className="customer-testimony__image" style={{ backgroundImage: `url(${props.image})` }}>
            </div>
            <div className="customer-testimony__texts">
                <div className="customer-testimony__headlines">
                    <h3>{props.customer}</h3>
                    <p>{props.headline}</p>
                    <hr />
                </div>
                <p className="customer-testimony__saying">
                    <FontAwesomeIcon icon = "quote-left" className = "customer-testimony__saying-quotes"/>
                    <i>{props.words}</i>
                </p>
                <div className="customer-testimony__page">
                    <p>
                        <FontAwesomeIcon
                            icon="circle"
                            style={{ color: props.slide === 0 ? "black" : "gray" }}
                            className="customer-testimony__page-dot" /></p>
                    <p>
                        <FontAwesomeIcon
                            icon="circle"
                            style={{ color: props.slide === 1 ? "black" : "gray" }}
                            className="customer-testimony__page-dot" /></p>
                    <p>
                        <FontAwesomeIcon
                            icon="circle"
                            style={{ color: props.slide === 2 ? "black" : "gray" }}
                            className="customer-testimony__page-dot" />
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TestimonySlider