import React, { Fragment } from "react"
import moment from "moment"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const New = (props) => {

    const generateClass = () => {
        if (props.sku < 3) {
            return "first-section"
        }
        else {
            return "section"
        }
    }

    const generateTool = () => {
        const randomNumber = Math.floor(Math.random() * 3)
        if (randomNumber === 1) {
            return "home"
        }
        else if (randomNumber === 2) {
            return "lightbulb"
        }
        else {
            return "wrench"
        }
    }

    return (

        <div className={generateClass()} style={{ display: generateClass() === "section" && !props.urlToImage && "none" }}>
            <div
                className="xillow__new-image"
                style={{ backgroundImage: generateClass() === "section" && `url(${props.urlToImage})`, display: generateClass() === "first-section" && "none" }}>
            </div>
            {generateClass() === "first-section" ?
                <Fragment>
                    <a href={`${props.url}`} className="article__links" style={{ color: generateClass() === "first-section" && "whiteSmoke" }} target="_blank" rel="noopener noreferrer">
                        <div>
                            <p className="xillow__new-tools"><FontAwesomeIcon className="xillow__new-tool" icon={generateTool()} />{generateClass() === "section" && <p>/ Story <FontAwesomeIcon icon="pencil-alt" /> </p>}</p>
                        </div>
                        <h4 className="xillow__new-title">{props.title.length >= 70 ? props.title.slice(0, 70) + "[...]" : props.title}</h4>
                        <div className="xillow__new-source">
                            <p><b style={{ color: "#0074e4" }}>{props.author}</b> {moment(props.publishedAt).format("lll")}</p>
                        </div>
                    </a>
                </Fragment>
                :
                <div className="xillow__new-small-container">
                    <a href={`${props.url}`} className="article__links" target="_blank" rel="noopener noreferrer">
                        <div>
                            <p className="xillow__new-tools"><FontAwesomeIcon className="xillow__new-tool" icon={generateTool()} />{generateClass() === "section" && <p>/ Story <FontAwesomeIcon icon="pencil-alt" /> </p>}</p>
                        </div>
                        <h4 className="xillow__new-title">{props.title}</h4>
                        <div className="xillow__new-source">
                            <p><b style={{ color: "#0074e4" }}>{props.author}</b> {moment(props.publishedAt).format("lll")}</p>
                        </div>
                    </a>
                </div>
            }
        </div>
    )
}

export default New