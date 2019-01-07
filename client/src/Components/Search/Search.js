import React from 'react'
import { withSearchData } from "../../Context/SearchProvider"

class Search extends React.Component {
    render() {
        return (
            <div>
                <h2>
                    <div>
                        <p>Search For Something</p>
                    </div>
                </h2>
            </div>
        )
    }
}

export default withSearchData(Search);