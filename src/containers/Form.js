import React, {Component} from 'react';

let id = 0

class Form extends Component {
  
  handleSubmit = (e) => {
    e.preventDefault();
    let title = this.getTitle.Value;
    let message = this.getMessage.value;
    const data = {
      id: new Date(),
      title, 
      message
    }
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

export default Form 