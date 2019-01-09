import React from 'react'
import { withSearchData } from "../../Context/SearchProvider"
import GoogleMap from "../GoogleMap"

class Search extends React.Component {
    render() {
        return (
            <div>
                <GoogleMap />
            </div>
        )
    }
}

export default withSearchData(Search);