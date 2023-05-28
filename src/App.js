import { Component } from 'react';
import './App.css';
import  MyCars  from './components/MyCars'


class App extends Component {
  state = {
    titre: "Mon Catalogue",
  }


  render () {
  return (
      <div className="App">
        <MyCars title={this.state.titre}
                titleColor="green"
        />
      </div>
    );
  }
}

export default App;
