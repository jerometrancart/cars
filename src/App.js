import { Component } from 'react';
import Mycars from './components/Mycars';
import './App.css';
import Welcome from './components/Welcome';

class App extends Component {


  render() {
    return (
      <div className='App'>
        <Mycars />
        <Welcome />
      </div>
    )
  }
}

export default App;