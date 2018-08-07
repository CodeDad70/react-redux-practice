import React, {Component} from 'react';

class Form extends Component {
  render() {
    return (
      
     <div>
       <form>
         
         <input required type="text" placeholder="Enter Post Title"/><br/><br/>
         
         <textarea required rows="10" cols="40"
         placeholder="Enter Post"/> <br/><br/>
         
         
      </form>
     </div> 
    )
  }
}

export default Form 