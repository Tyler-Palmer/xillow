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
                savedHouses: res.data[0].savedHouse[0]
                
            }, () => {
                this.setState({
                    numberSaved: this.state.savedHouses.length
                })
            })
        }).catch(err => console.log(err))
    }

    //Get One House
    getSelectedHouse = (houseID, userID) => {
        axios.get(`/savedhouse/${userID}/${houseID}`).then(res => {
            this.setState({
                house: res.savedHouse
            })
        }).catch(err => console.log(err))
    }

    //Add house to saved houses
    addUserHouse = (houseObj, userID) => {
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

    render() {
        return (
            <Provider value={{
                ...this.state,
                getUserHouses: this.getUserHouses,
                addUserHouse: this.addUserHouse,
                getSelectedHouse: this.getSelectedHouse
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