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
                    <h2>Xillow PorchLight</h2>
                    <h4 className="xillow-news__slogan">Always on, guiding you home</h4>
                    <div className="xillow-new__first-group">
                        {this.props.newsData.slice().splice(0, 3).map((each, id) => <New {...each} sku={id} />)}
                    </div>
                </div>

                <div className="xillow-news__new-container">
                    <div className="xillow-stories">
                        <h2 className = "all-stories">All Stories</h2>
                    </div>
                    <div className="xillow-news__new">
                        {this.props.newsData.slice().splice(3, 7).map((each, id) => <New {...each} sku={id + 3} />)}
                    </div>
                    <div className="xillow-news__new">
                        {this.props.newsData.slice().splice(10, 10).map((each, id) => <New {...each} sku={id + 10} />)}
                    </div>
                </div>
            </div>
        )
    }
}

export default withNew(News)