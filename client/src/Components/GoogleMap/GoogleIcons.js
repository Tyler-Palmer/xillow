import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class GoogleIcon extends React.Component {
    render() {
        return (
            <div className = "google-icon-container">
                {
                    this.props.house ? <FontAwesomeIcon className="home-icon" icon="home" /> :
                        <div className="google-icon__image" style={{ backgroundImage: `url(${this.props.icon})` }}>
                        </div>
                }                
            </div>
        )

    }
}

export default GoogleIcon