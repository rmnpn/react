import React, {Component} from 'react';
import Post from "./pages/postsPage/Post";
import {PostPage} from "./pages/postsPage/postPage";
import CommentPage from "./pages/commentsPage/commentPage";
import CarsPage from "./pages/carsPage/carsPage";

class App extends Component {
    render() {
        return (
            <div style={{display: 'flex'}}>
               POSTS: <PostPage/>
               COMMENTS: <CommentPage/>
                CARS: <CarsPage/>
            </div>
        );
    }
}

export default App;
