import React from "react"
import axios from "axios"

const { Provider, Consumer } = React.createContext()

class NewContext extends React.Component {
    constructor() {
        super()
        this.state = {}
    }

    getNewData = () => {
        axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a2b02d46338149c3bb4469ba8b36d478`)
            .then(res => {
                console.log(res)
            })
    }

    render() {
        return (
            <Provider
                value={{
                    ...this.state,
                    getNewData: this.getNewData
                }}>

                {this.props.children}
            </Provider>
        )
    }
}


export default NewContext

export const withNew = C => props => (
    <Consumer>
        {
            value => <C {...value} {...props} />
        }
    </Consumer>
)

