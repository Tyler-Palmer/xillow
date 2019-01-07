import React, { Component } from 'react';
import axios from 'axios';

const parseString = require("xml2js").parseString

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
        const serverUrl = "https://vschool-cors.herokuapp.com?url="
        axios.get(`${serverUrl}http://www.zillow.com/webservice/GetSearchResults.htm?zws-id=${process.env.REACT_APP_ZILLOWKEY}&address=2114+Bigelow+Ave&citystatezip=Seattle%2C+WA`,
        {headers: {"Accept": "application/x-www-form-urlencoded"} })
        .then(res => {
            parseString(res.data, {trim: true}, (err, response) => {
                console.dir(response)
            })
        })
    }

    render() {
        return (
            <SearchProviderContext.Provider
                value={{
                    ...this.state,
                    getZillowData: this.getZillowData
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