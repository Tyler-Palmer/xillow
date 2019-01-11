import React, { Component } from 'react'
import { withGoogleData } from "../../Context/NearbyData"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class SubSearch extends Component {
    constructor() {
        super()
        this.state = {
            address: ""
        }
    }

    handleUserSearchInput = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleUserSearchSubmit = (e) => {
        e.preventDefault()
        this.props.getNearbyLocationData(this.state.address)
    }

    render() {
        return (
            <div className="sub-search-container">
                <div className="sub-search-container-small">
                    <form onSubmit={this.handleUserSearchSubmit}>
                        <input
                            name="address"
                            value={this.state.address}
                            onChange={this.handleUserSearchInput}
                            placeholder="Enter an adress, neighborhood, city, or ZIP code" />
                        <button><FontAwesomeIcon icon="search" /></button>
                    </form>
                </div>
            </div>
        )
    }
}

export default withGoogleData(SubSearch)