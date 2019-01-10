import React from "react"
import moment from "moment"

const New = (props) => {
    console.log(props)

    const generateClass = () => {
        if (props.sku < 3) {
            return "first-section"
        }
        else {
            return "section"
        }
    }

    return (
        <div>
            <div
                className="xillow__new-image"
                style={{ backgroundImage: generateClass() === "section" && `url(${props.urlToImage})`, display: generateClass() === "first-section" && "none"}}>
            </div>
            <div>

            </div>
            <h2>{props.title}</h2>
            <div>
                <h5>{props.source.name}</h5>
                <p>{props.author}</p>
                <p>{moment(props.publishedAt).format("lll")}</p>
            </div>
        </div>
    )
}

export default New