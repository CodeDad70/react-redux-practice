import React, { Component } from 'react';
import Form from './containers/Form'
import Posts from './components/Posts'


class App extends Component {
  render() {
    return (
      <div className="app">
        <Form/>
        <Posts/>  
      </div>
    );
  }
}

export default App;
