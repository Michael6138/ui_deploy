import logo from './logo.svg';
import './App.css';
import {Component} from "react";
import axios from "axios";

class App extends Component{
  constructor() {
    super();

    this.state = {
      wordLocal: 'Word local',
      wordRemote: null
    }
  }

  componentDidMount() {
    axios.get('http://62.109.2.137:8080/helloDeployment')
      .then(response => {
        this.setState({
          wordRemote: response.data
        })
      })

  }

  render() {
    return (
      <div>
        <div>{this.state.wordLocal}</div>
        <div>{this.state.wordRemote}</div>
      </div>

    );
  }

}

export default App;
