import React from "react"
import moment from "moment"

const New = (props) => {
    console.log(props)
    return (
        <div>
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