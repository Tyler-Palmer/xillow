import React from "react"
import TestimonySlider from "./TestimonySlider"

class Testimony extends React.Component {
    constructor() {
        super()
        this.state = {
            testimonies: [
                { image: "https://ssl.cdn-redfin.com/v241.2.6/images/homepage/quotes/carousel-photos-63/veena-ryan-desktop.jpg", customer: "Veean and Ryan", headline: "Saved $23,450 buying with a Xillow Agent", words: "Our Xillow Agent really knocked it out of the ballpark, selling our house above the asking price. The commission savings was just an added bonus." },
                { image: "https://ssl.cdn-redfin.com/v241.2.6/images/homepage/quotes/carousel-photos-63/blake-kwamin-desktop.jpg", customer: "Kwamin and Blake", headline: "Saved $2,950 buying with a Xillow Agent", words: " Our Xillow Agent had an entire team working with him so someone was always available when we needed them. I can’t imagine buying a home any other way." },
                { image: "https://ssl.cdn-redfin.com/v241.2.6/images/homepage/quotes/carousel-photos-63/alissa-pete-desktop.jpg", customer: "Alissa and Pete", headline: "Saved $13,950 buying with a Xillow Agent", words: "Buying with Xillow was a triple win: The website was easy to use, the way we set up home tours was efficient, and we even got money back at the end." },
            ],
            slide: 0
        };
            this.setIntervalId = undefined
    }

    componentDidMount() {
        //Help generate slide testimony
        this.setIntervalId = setInterval(() => {
            if (this.state.slide >= 2) {
                this.setState({
                    slide: 0
                })
            }
            else {
                this.setState(prevState => ({
                    slide: prevState.slide + 1
                })
                )
            }
        }, 8000)
    }
    render() {

        return (
            <div className="customer-testimony__container">
                {this.state.testimonies.map((each, id) => 
                <TestimonySlider
                    {...each}
                    key={id}
                    id={id}
                    slide={this.state.slide} />)}
            </div>
        )
    }
}


export default Testimony;