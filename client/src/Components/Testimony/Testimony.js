import React from "react"
import TestimonySlider from "./TestimonySlider"

class Testimony extends React.Component {
    constructor() {
        super()
        this.state = {
            testimonies: [
                { image: "https://images.unsplash.com/photo-1512001836996-40a16732ecec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80", customer: "George and Carla", headline: "Saved $23,450 buying with a Xillow Agent", words: "Our Xillow Agent really knocked it out of the ballpark, selling our house above the asking price. The commission savings was just an added bonus." },
                { image: "https://images.unsplash.com/photo-1498618480317-92f84893b69e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80", customer: "Kwamin and Abby", headline: "Saved $2,950 buying with a Xillow Agent", words: " Our Xillow Agent had an entire team working with him so someone was always available when we needed them. I can’t imagine buying a home any other way." },
                { image: "https://images.unsplash.com/photo-1515815491543-9959ca08f466?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80", customer: "Alissa and Pete", headline: "Saved $13,950 buying with a Xillow Agent", words: "Buying with Xillow was a triple win: The website was easy to use, the way we set up home tours was efficient, and we even got money back at the end." },
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

        }, 10000)
      
    }

    componentWillUnmount(){
        clearInterval(this.setIntervalId);
    }

    render() {

        return (
            <div className="customer-testimony__container">
                {this.state.testimonies.map((each, id) => 
                <TestimonySlider
                    {...each}
                    key={id}
                    id={id}
                    slide={this.state.slide} 
                    />)}
            </div>
        )
    }
}


export default Testimony;