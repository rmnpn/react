import React, {Component} from 'react';
import ApiService from "../../services/apiServices";
import comment from "./comment";
import Comment from "./comment";

class CommentPage extends Component {
    constructor(props) {
        super(props);
        this.state = {comments: []}

    }

    componentDidMount() {
        const commentService = new ApiService('comments').getAllDataPlace();
        commentService.then(value => this.setState({comments: value}))
    }

    render() {
        return (
            <div>
                {this.state.comments.map(comment => <Comment comment={comment} key={comment.id}/>)}
            </div>
        );
    }
}

export default CommentPage;