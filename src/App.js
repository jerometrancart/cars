import { Component } from 'react';
import './App.css';
import  MyCars  from './components/MyCars'


class App extends Component {
  state = {
    titre: "Mon Catalogue",
    cars: ["Ford", "Mercedes", "Peugeot"]
  }


  render () {
  return (
      <div className="App">
        <MyCars title={this.state.titre}
                titleColor="green"
                cars={this.state.cars}
        />
      </div>
    );
  }
}

export default App;
