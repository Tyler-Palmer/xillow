import React from "react"


const { Provider, Consumer } = React.createContext()

class ServerListingContext extends React.Component{
    render(){
        return(
            <Provider value ={{

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