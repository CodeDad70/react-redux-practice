import React, {Component} from 'react';
import {connect} from 'react-redux';

class Edit extends Component {
 
    handleEdit = (e) => {
      e.preventDefault();
      const newTitle = this.getTitle.value;
      const newMessage = this.getMessage.value;
      const data = {
        newTitle, 
        newMessage
      }
      this.props.dispatch(
        {
          type: 'UPDATE',
          id: this.props.post.id,
          data: data
        }
      )
    }

  render() {
    return (
      <div>
        <form onSubmit={this.handleEdit}>
          
          <input required type="text" ref={(input)=>
          this.getTitle = input}
          defaultValue = {this.props.post.title}
          placeholder="Enter Post Title"
          /> <br/> <br/>

          <textarea required rows="10" cols="40" ref={(input)=>
          this.getMessage = input}
          defaultValue = {this.props.post.message}
          placeholder="Enter Post" /> <br/> <br/>

          <button> Update </button>

        </form>
      </div>
    )
  }
}

export default connect()(Edit);