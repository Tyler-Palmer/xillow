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
                <div className="xillow-news__background" style={{ backgroundImage: `url(https://wp.zillowstatic.com/1/cropped-shutterstock_281623898-78366a-b1fc53-672ba1.jpg)` }}>
                    <div className="xillow-new__first-group">
                        {this.props.newsData.slice().splice(0, 3).map((each, id) => <New {...each} sku = {id}/>)}
                    </div>
                </div>
                <div className="xillow-news__new">
                    {this.props.newsData.slice().splice(3, 10).map((each, id) => <New {...each} sku = {id + 3} />)}
                </div>
                <div className="xillow-news__new">
                    {this.props.newsData.slice().splice(10, this.props.newsData.length).map((each, id) => <New {...each} sku = {id + 10} />)}
                </div>
            </div>
        )
    }
}

export default withNew(News)