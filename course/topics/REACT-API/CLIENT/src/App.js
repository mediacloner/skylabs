import React, { Component } from 'react';
import './App.css';
import api_client from './api-client.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  
  constructor() {
      super()
      this.state = {
        user : []
    }
  }

  componentWillMount() {
    api_client.getList().then(user => this.setState({ user }))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">BASIC USER LIST</h1>
        </header>
        <p className="App-intro">
          I'm trying to list the users in Mongo DB
        </p>
         <ListUser dataUsers={this.state.user} />
      </div>
    );
  }
}

function ListUser(props) {
console.log (props.dataUsers[0])
return (
<p className="App-intro">
comoponent ListUser 
</p>);
/*   return (
    <ul>
      {props.user.map((user, index) => (
        <li>
          {task} &nbsp;{" "}
          <a
            onClick={e => {
              e.preventDefault();

              props.onRemoveTask(index);
            }}
          >
            ⚡
          </a>
        </li>
      ))}
    </ul> */
//  );
}

export default App;
