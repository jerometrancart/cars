import { Component } from 'react';
import  Car  from './Car'

class MyCars extends Component {
    state = {
        cars: ["Ford", "Mercedes", "Peugeot"]
    }
    render () {
        const {title, titleColor} = this.props;
        const {cars} = this.state;
    return (
        <div className="mycars">
            <h1 style={ { color: titleColor }
            } >{title}</h1>
            <Car color="red">{cars[0]}</Car>
            <Car>{cars[1]}</Car>
            <Car color="green">{}</Car>
        </div>
      );
    }
  }
  
  export default MyCars;
  