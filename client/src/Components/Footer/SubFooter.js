import React from "react"

const SubFooter = (props) =>{
    return (
        <div className = "each-sub-footer__container">
            <ul className = "sub-footer__list">
                <h4>{props.name}</h4>
                <li>{props.firstLst}</li>
                <li>{props.secondList}</li>
                <li>{props.thirdList}</li>
                <li>{props.fourthList}</li>
                <li>{props.fiflthList}</li>
                <button>More</button> 
            </ul>
        </div>
    )
}

export default SubFooter