import { Component } from 'react'
import Car from './Car'

class Mycars extends Component {
    state = {
        voitures: [
            {name: "Ford", color: "red", year: 2000},
            {name: "Mercedes", color: "black", year: 2022},
            {name: "Peugeot", color: "green", year: 2023}
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

    getAge = year => {
        const currentYear = new Date().getFullYear();
        const age = currentYear - year;

        let frenchYearStr = "";
        if(age === 1) {
            frenchYearStr = "an";
        } else if (age > 1) {
            frenchYearStr = "ans";
        } 
        return `${age} ${frenchYearStr}`;
    }

    render() {
        // const [ford, mercedes, peugeot] = this.state.voitures;
        // const currentYear = new Date().getFullYear();
        return (
            <div>
                <h1>{this.state.titre}</h1>
                <button onClick={this.addTenYears}>+10ans</button>

                {/* <Car color={ford.color} year={currentYear - ford.year} name={ford.name} />
                <Car color={mercedes.color} year={currentYear - mercedes.year} name={mercedes.name} />
                <Car color={peugeot.color} year={currentYear - peugeot.year} name={peugeot.name} /> */}
                {
                    this.state.voitures.map(({name, color, year}, index) => {
                        return(
                            <div key={index}>
                                <Car color={color} year={this.getAge(year)} name={name} />
                            </div>
                        )
                    })
                } 
            </div>
           
        )
    }
}

export default Mycars