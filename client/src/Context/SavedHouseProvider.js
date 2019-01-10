import React, { Component } from 'react'

const { Provider, Consumer } = React.createContext()

class SavedHouseProvider extends Component{
    constructor(){
        super()
        this.state = {
            savedHouses: [],
            house: {}
        }
    }
    
    render(){
        return(
            <Provider value={{}}>
                {...this.props.children}
            </Provider>
        )
    }
}

export default SavedHouseProvider

export const withHouses = C => props => {
    <Consumer>
        {value => <C {...props} {...value} />}
    </Consumer>
}