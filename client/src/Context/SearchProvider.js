import React, { Component } from 'react'
import axios from 'axios'

const SearchProviderContext = React.createContext()

class SearchProvider extends Component {
    constructor() {
        super()
        this.state = {
            search: "",
            searchObject: {}
        }
    }

    getZillowData = (info) => {
        axios.get()
    }

    render() {
        return (
            <SearchProviderContext.Provider
                value={{
                    ...this.state
                }}>
                {this.props.children}
            </SearchProviderContext.Provider>
        )
    }
}

export default SearchProvider

export const withSearchData = (C) => props => (
    <SearchProviderContext.Consumer>
        {
            value => <C {...props} {...value} />
        }
    </SearchProviderContext.Consumer>
)