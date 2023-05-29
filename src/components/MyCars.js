import { Component } from 'react'
import Car from './Car'

class Mycars extends Component {
    state = {
        voitures: [
            {name: "Ford", color: "red", year: 2000},
            {name: "Mercedes", color: "black", year: 2010},
            {name: "Peugeot", color: "green", year: 2018}
        ],

        titre: 'Mon Catalogue Voitures'
    }

    addTenYears = () => {
        const updatedState = this.state.voitures.map((param) => {
            return param.year -= 10;
        })
        this.setState({
            updatedState
        })
    }

    render() {
        const currentYear = new Date().getFullYear();
        return (
            <div>
                <h1>{this.state.titre}</h1>
                <button onClick={this.addTenYears}>+10ans</button>

                {
                    this.state.voitures.map((voiture, index) => {
                        return(
                            <div key={index}>
                             <Car color={voiture.color} year={currentYear - voiture.year} name={voiture.name}></Car>
                            </div>
                        )
                    })
                }
            </div>
           
        )
    }
}

export default Mycars