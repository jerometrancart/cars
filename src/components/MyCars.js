import { Component } from 'react';
import  Car  from './Car'

class MyCars extends Component {
    render () {
        const {title} = this.props;
        const {titleColor} = this.props;
        const {cars} = this.props;
        console.log({cars});
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
  