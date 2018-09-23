import React, { Component } from 'react'
import SearchBar from '../components/SearchBar'
import BlogList from '../components/BlogListing'

const link =
    "https://cdn.rawgit.com/kevinhermawan/ca5e0083648ba5ffb2421808d972dd9c/raw/c29c7ee02849b58024fb6a058acae33bde38cbd3/react-blog-example.json";

class App extends Component{
    constructor() {
        super()

        this.state = {
            loading: true,
            // search: "",
            blogs: [],
            filteredBlogs: []
        }
    }

    componentDidMount() {
        this.handleGetBlogs()
    }

    handleTypeSearch = event => {
        const filteredBlogs = this.state.blogs.filter((blog) => {
            return blog.title.toLowerCase().indexOf(event.target.value) > -1
        })
        this.setState({
            // search: event.target.value
            filteredBlogs : filteredBlogs
        })
        console.log(this.state.search)
    }

    // componentDidMount() {
    //     setTimeout(() =>
    //         this.setState({loading: false}), 1000)
    // }

    handleGetBlogs = () => {
        fetch(link)
            .then(res => res.json())
            .then(res => this.setState({blogs: res, filteredBlogs: res, loading: false}))
    }

    render() {

        if (this.state.loading) {
            return (
                <h1>Loading</h1>
            )
        }

        console.log(this.state.filteredBlogs)
        return(
            //<h1>loading : {JSON.stringify(this.state.loading)}</h1>
            <div>
                <SearchBar
                    onChangeSearch = { this.handleTypeSearch }/>
                {this.state.filteredBlogs.map((blog, index) => (
                    <BlogList
                        key = {index}
                        title = {blog.title}
                        author = {blog.author}
                        created_at = {blog.created_at}
                        content = {blog.content}/>
                ))}
            </div>
        )
    }
}

export default App
