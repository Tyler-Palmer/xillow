import React, { Component } from 'react'
import axios from 'axios';

const { Provider, Consumer } = React.createContext()

class SavedHouseProvider extends Component {
    constructor() {
        super()
        this.state = {
            savedHouses: [],
            house: {},
            numberSaved: 0,
            isCheckingHouse: false
        }
    }

    //Get all of a User's houses
    getUserHouses = userID => {
        axios.get(`/savedhouse/${userID}`).then(res => {
            console.log(res.data)
            this.setState({
                savedHouses: res.data[0].savedHouse
                
            }, () => {
                this.setState({
                    numberSaved: this.state.savedHouses.length
                })
            })
        }).catch(err => console.log(err))
    }

    //Get One House
    getSelectedHouse = (houseID) => {
        console.log(`getSelectedHouse fired in context`)
        axios.get(`/listing/listings/${houseID}`).then(res => {
            this.setState({
                house: res.savedHouse
            })
        }).catch(err => console.log(err))
    }

    //Add house to saved houses
    addUserHouse = (userID, houseID) => {
        axios.post(`/savedhouse/${userID}/${houseID}`).then(res =>{
            console.log("addhouse route hit client-side")
            this.setState(prevState => {
                return {
                savedHouses: [...prevState.savedHouses, res.data],
                numberSaved: res.data.length
                }
            })
            console.log("house added")
        }).catch(err => console.log(err))
        console.log(this.state.savedHouses)
        
    }

    removeHouse = (userID, houseID) => {
        console.log(`removed house: ${houseID}here`)
        axios.put(`/savedhouse/${userID}/${houseID}`).then(res => {
            this.setState({
                    savedHouses: res.data.savedHouse
            })
            console.log("removed house")
        })
    }

    numberHousesSaved = () => {
        this.setState({
            numbersaved: this.state.savedHouses.length
        })
    }

    onHover = () =>{
        this.setState({
            isCheckingHouse: true
        })
    }

    onLeave = () => {
        this.setState({
            isCheckingHouse: false
        })
    }

    render() {
        return (
            <Provider value={{
                ...this.state,
                getUserHouses: this.getUserHouses,
                addUserHouse: this.addUserHouse,
                getSelectedHouse: this.getSelectedHouse,
                removeHouse: this.removeHouse,
                onHover: this.onHover,
                onLeave: this.onLeave,
                numberHousesSaved: this.numberHousesSaved
            }}>
                { this.props.children }
            </Provider>
        )
    }
}

export default SavedHouseProvider

export const withHouses = C => props => (
    <Consumer>
        {value => <C {...props} {...value} />}
    </Consumer>
)