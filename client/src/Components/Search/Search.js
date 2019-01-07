import React from 'react'
import { withSearchData } from "../../Context/SearchProvider"

class Search extends React.Component {
    componentDidMount(){
        this.props.getZillowData()
    }
    render() {
        return (
            <div>
                <h2>Testing</h2>
            </div>
        )
    }
}

export default withSearchData(Search);