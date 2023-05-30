import { Component, Fragment } from 'react'
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
        
        return (
            <Fragment>
                
                <h1>{this.state.titre}</h1>
                
                <table style={ {backgroundColor: 'pink', width: '400px', padding: '10px', margin: '5px auto'} }>
                    <thead>
                        <tr>
                            <th>Marque</th>
                            <th>Âge</th>
                            <th>Couleur</th>
                        </tr>
                    </thead>
                    <tbody>
                {
                    this.state.voitures.map(({name, color, year}, index) => {
                        return(
                            <Fragment key={index}>
                                <Car color={color} year={this.getAge(year)} name={name} />
                            </Fragment>
                        )
                    })
                }

                    </tbody>

                </table> 
            </Fragment>
           
        )
    }
}

export default Mycars