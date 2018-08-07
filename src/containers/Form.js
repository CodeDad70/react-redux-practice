import React, {Component} from 'react';
import {connect} from 'react-redux';

let id = 0

class Form extends Component {
  
  handleSubmit = (e) => {
    e.preventDefault();
    let title = this.getTitle.value;
    let message = this.getMessage.value;
    const data = {
      id: ++id,
      title, 
      message
    }
    this.props.dispatch({
      type:'ADD_POST',
      data
    })
    this.getTitle.value=''
    this.getMessage.value=''
  }

  render() {
    return (
      
     <div>
       <h2>Create Post</h2>
       
       <form onSubmit={this.handleSubmit}>
         
         <input 
         required type="text" 
         ref={(input)=>this.getTitle=input}
         placeholder="Enter Post Title"/>
         <br/><br/>
         
         <textarea 
         required rows="10" 
         cols="40"
         ref={(input)=>this.getMessage=input} 
         placeholder="Enter Post"/> 
         <br/><br/>
         
         <button>Post</button>
         
      </form>
     </div> 
    )
  }
}

export default connect()(Form); 