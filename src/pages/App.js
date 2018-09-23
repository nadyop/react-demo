import React, { Component } from 'react'
import SearchBar from '../components/SearchBar'

class App extends Component{
    constructor() {
        super()

        this.state = {
            loading: true,
            search: ""
        }
    }

    handleTypeSearch = event =>{
        this.setState({
            search: event.target.value
        })
        console.log(this.state.search)
    }

    // componentDidMount() {
    //     setTimeout(() =>
    //         this.setState({loading: false}), 1000)
    // }

    render() {
        return(
            //<h1>loading : {JSON.stringify(this.state.loading)}</h1>
            <SearchBar
                search = {this.state.search}
                onChangeSearch = { this.handleTypeSearch }/>
        )
    }
}

export default App
