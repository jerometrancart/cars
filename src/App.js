import { Component } from 'react';
import './App.css';
import  MyCars  from './components/MyCars'


class App extends Component {
  state = {
    titre: "Mon Catalogue",
  }
  changeTitle = (e) => {
    console.log(e.target)

    this.setState({
      titre: 'Mon nouveau titre'
    })
  }

  changeViaParam = (titre) => {
    this.setState({
      titre: titre
    })
  }

  changeViaBind = (titre) => {
    this.setState({
      titre: titre
    })
  }

  changeViaInput = (e) => {
    this.setState({
      titre : e.target.value
    })
    console.log(e.target.value)
  }
  
  render () {
  return (
      <div className="App">
        <MyCars title={this.state.titre}
                titleColor="green"
        />
        <button onClick={this.changeTitle}>Changer le nom en dur</button>
        <button onClick={() => this.changeViaParam('Titre modifié via un paramètre')}>Changer le nom via paramètre</button>
        <button onClick={this.changeViaBind.bind(this, 'Titre modifié via un Bind')}>Changer le nom via un bind</button>
        <input type="text" onChange={this.changeViaInput} value={this.state.titre}/>
      </div>
    );
  }
}

export default App;
