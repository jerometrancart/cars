import { Component } from 'react';
import  Car  from './Car'

class MyCars extends Component {
    render () {
    return (
        <div className="mycars">
          <h1>Hello React</h1>
          <Car color="red">Ford</Car>
          <Car>Mercedes</Car>
          <Car color="green"></Car>
        </div>
      );
    }
  }
  
  export default MyCars;
  