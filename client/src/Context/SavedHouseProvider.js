import React, { Component } from 'react'
import axios from 'axios';

const { Provider, Consumer } = React.createContext()

class SavedHouseProvider extends Component {
    constructor() {
        super()
        this.state = {
            savedHouses: [],
            house: {},
            numberSaved: 0
        }
    }

    //Get all of a User's houses
    getUserHouses = userID => {
        axios.get(`/savedhouse/${userID}`).then(res => {
            console.log(res.data)
            this.setState({
                savedHouses: res.data[0].savedHouse.map(each => each.listings)
                
            }, () => {
                this.setState({
                    numberSaved: this.state.savedHouses.length
                })
            })
        }).catch(err => console.log(err))
    }

    //Get One House
    getSelectedHouse = (userID, houseID ) => {
        axios.get(`/savedhouse/${userID}/${houseID}`).then(res => {
            this.setState({
                house: res.savedHouse
            })
        }).catch(err => console.log(err))
    }

    //Add house to saved houses
    addUserHouse = (userID, houseObj) => {
        axios.post(`/savedhouse/${userID}`, {houseObj}).then(res =>{
            this.setstate(prevState => {
                return {
                savedHouses: [...prevState.savedHouses, res.data],
                numberSaved: res.data.length
                }
            })
        }).catch(err => console.log.log(err))
        console.log(this.state.savedHouses)
    }

    removeHouse = (userID, houseID) => {
        axios.delete(`/savedhouse/${userID}/${houseID}`).then(res => {
            this.setState( prevState => {
                return {
                    savedHouses: prevState.filter(houses => houses.id !== houseID)
                }
            })
        })
    }

    render() {
        return (
            <Provider value={{
                ...this.state,
                getUserHouses: this.getUserHouses,
                addUserHouse: this.addUserHouse,
                getSelectedHouse: this.getSelectedHouse,
                removeHouse: this.removeHouse
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