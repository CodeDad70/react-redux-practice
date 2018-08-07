import React, {Component} from 'react';
import {connect} from 'react-redux'
import Post from './Post'

class Posts extends Component {
  render(){
    return (
      <div>
        <h3>Posts:</h3>
        {this.props.posts.map((post)=>
          <Post key={post.id} post={post}/>
        )}
       </div> 
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts:state
  }
}

export default connect(mapStateToProps)(Posts);
