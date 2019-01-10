import React from "react"
import axios from "axios"

const { Provider, Consumer } = React.createContext()

class NewContext extends React.Component {
    constructor() {
        super()
        this.state = {
            newsData: []
        }
    }

    getNewsData = () => {
        axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${process.env.REACT_APP_NEWAPI}`)
            .then(res => {
                this.setState({
                    newsData: res.data.articles
                })
            })
    }

    render() {
        console.log(this.state.newsData)
        return (
            <Provider
                value={{
                    ...this.state,
                    getNewsData: this.getNewsData
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

