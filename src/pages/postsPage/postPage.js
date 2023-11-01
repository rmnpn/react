import React from "react";

import ApiService from "../../services/apiServices";
import Post from "./Post";

class PostPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {posts: []}
    }

    componentDidMount() {
        const postService = new ApiService('posts').getAllDataPlace()
        postService.then((value) => this.setState({posts: value}))
        // fetch('https://jsonplaceholder.typicode.com/posts').then(value => value.json())
        //     .then(({data})=> this.setState({posts: data}))
    }


    render() {
        console.log(this.state)
        return (
            <div>
                {this.state.posts.map(post=> <Post post={post} key={post.id}/>)}
            </div>
        )
    }
}

export {PostPage}