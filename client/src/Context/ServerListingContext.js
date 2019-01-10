import React from "react"
import axios from "axios"

const { Provider, Consumer } = React.createContext()

class ServerListingContext extends React.Component{
    constructor(){
        super()
        this.state = {}
    }

    getListingData = () =>{
        axios.get("/listing/listings").then(res => {
            console.log(res)
        })
    }

    render(){
        return(
            <Provider value ={{
                getListingData: this.getListingData
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

export default ServerListingContext

export const withServerListing = (C) => props => (
    <Consumer>
        {
            value => < C {...props} {...value}/>
        }
    </Consumer>
)