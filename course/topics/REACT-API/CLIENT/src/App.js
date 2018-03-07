import React, { Component } from 'react';
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import api_client from './api-client.js'
import {HashRouter} from 'react-router-dom'


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

      <HashRouter>
      <div className="App">
        <Header/>
        <Body/>
        <Footer/>
      </div>
      </HashRouter>
    )
  }
}

function ListUser(props) {
console.log (props.dataUsers[0])
return (
  <div>
      <ul> {props.dataUsers.map(item => <li>{item.name}</li>)} </ul>
  </div>

)}

export default App;
