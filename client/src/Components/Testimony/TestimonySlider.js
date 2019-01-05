import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TestimonySlider = (props) => {
    console.log(props.slide)
    return (
        <div className = "customer-testimony__small-container">
            <div className="customer-testimony__image" style = {{backgroundImage: `url(${props.image})`}}>
            </div>
            <div className="customer-testimony__texts">
                <div className="customer-testimony__headlines">
                    <h2>{props.customer}</h2>
                    <h2>{props.headline}</h2>
                    <hr />
                </div>
                <p className="customer-testimony__saying">
                    {props.words}
                </p>
                <div className="customer-testimony__page">
                    <p><FontAwesomeIcon icon="circle" /></p>
                    <p><FontAwesomeIcon icon="circle" /></p>
                    <p><FontAwesomeIcon icon="circle" /></p>
                </div>
            </div>
        </div>
    )
}

export default TestimonySlider