import React from "react"
import { withNew } from "../../Context/NewContext"
import New from "./New"

class News extends React.Component {

    componentDidMount() {
        this.props.getNewsData()
    }

    render() {
        return (
            <div className="xillow-news__container">
                <div className="xillow-news__background" style={{ backgroundImage: url(`url(https://wp.zillowstatic.com/1/cropped-shutterstock_281623898-78366a-b1fc53-672ba1.jpg)`) }}>
                    <div>
                        {this.props.newsData.slice().splice(0, 3).map(each => <New {...each} />)}
                    </div>
                </div>
                <div className="xillow-news__new">
                    {this.props.newsData.slice().splice(3, 10).map(each => <New {...each} />)}
                </div>
            </div>
        )
    }
}

export default withNew(News)