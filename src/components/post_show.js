import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';
import { Link } from 'react-router-dom';

class PostsShow extends Component {

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  deletePost () {
    const { id } = this.props.match.params
    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { post } = this.props;

    if (!post) {
      return (
        <div>Loading...</div>
      );
    } else {
      return (
        <div>
          <h3>{post.title}</h3>
          <h6>Categorie: {post.categories}</h6>
          <p>{post.content}</p>
          <Link to="/" className="btn btn-primary">Return</Link>
          <button type="submit"
            className="btn btn-danger pull-xs-right"
            onClick={this.deletePost.bind(this)}>
              Delete Post
          </button>
        </div>
      );
    }
  }
}

function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost }) (PostsShow);