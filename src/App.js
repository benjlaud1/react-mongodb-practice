import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {name: ''};
  }

  onSubmit(e) {
    e.preventDefault();
  }

  onNameChange(e) {
    this.setState({
      name: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>React and MongoDB Test Application</h2>
        </div>
        <div className="App-body">
          <div className="tile input">
            <p>Hello, please enter your name!</p>
            <form onSubmit={this.onSubmit} >
              <input type="text" value={this.state.name} onChange={this.onNameChange} />
              <input type="submit" value="Add Name" />
            </form>
          </div>
          <div className="tile user">
             <p>Welcome {this.state.name}!</p> 
          </div>
        </div>
      </div>
    );
  }
}

export default App;
