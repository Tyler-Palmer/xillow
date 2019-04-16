import React from "react"
import axios from "axios"

const { Provider, Consumer } = React.createContext()

class ServerListingContext extends React.Component {
    constructor() {
        super()
        this.state = {
            listingsData: [],
            newListingData: [],
            checkingRightNow: "",
            pages: undefined,
            searchPage: true,
            modalIsOpen: true,
        }
    }

    toggleModal = () => {
        this.setState(prevState => ({
            modalIsOpen: !prevState.modalIsOpen
        }))
    }

    toggleSearch = () => {
        this.setState(prevState =>({
            searchPage: !prevState.searchPage
        }))
        console.log('toggleSearch hit')
        console.log(`${this.state.searchPage}`)
    }

    getNewListingData = () => {
        axios.get("/listing/listings").then(res => {
            this.setState({
                listingsData: res.data,
            })
        })
        console.log('getNewListingData sent this')
    }

    getListingData = (id) => {
        axios.get(`/listing/pag?page=${id || 1}`).then(res => {
            console.log(res)
            this.setState({
                listingsData: res.data.docs,
                newListingData: res.data.docs,
                pages: res.data.pages
            }, () => {
                this.changeDataToLocation();
            })
        })
    }

    handleHoverImage = (id) => {
        this.setState({
            checkingRightNow: id
        }, () => {
            console.log(this.state.checkingRightNow)
        })

    }

    handleLeaveImage = () => {
        this.setState({
            checkingRightNow: ""
        })
    }


    displayListingsData = () => {
        this.getListingData()
    }

    changeDataToLocation = () => {
        this.state.listingsData.map(each => axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${each.listings.address}&key=${process.env.REACT_APP_GOOGLEKEY}`).then(res => {
            const newData = this.state.listingsData.find(house => house._id === each._id)
            newData.longtitude = res.data.results[0].geometry.location.lng;
            newData.latitude = res.data.results[0].geometry.location.lat;
            // if (this.state.newListingData.length <= 25) {
               
                this.setState(prevState => ({
                    newListingData: [...prevState.newListingData, newData],
                    listingsData: [...prevState.listingsData, newData]
                }))
            // }
        }
        ))
    }

    render() {
        return (
            <Provider value={{
                ...this.state,
                getListingData: this.getListingData,
                displayListingsData: this.displayListingsData,
                handleLeaveImage: this.handleLeaveImage,
                handleHoverImage: this.handleHoverImage,
                getNewListingData: this.getNewListingData,
                toggleSearch: this.toggleSearch,
                toggleModal: this.toggleModal,
                modalIsOpen: this.state.modalIsOpen,
                searchPage: this.state.searchPage

            }}>
                {this.props.children}
            </Provider>
        )
    }
}

export default ServerListingContext

export const withServerListing = (C) => props => (
    <Consumer>
        {
            value => < C {...props} {...value} />
        }
    </Consumer>
)

