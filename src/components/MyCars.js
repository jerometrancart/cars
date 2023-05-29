import { Component } from 'react';
import  Car  from './Car'
import Wrapper from './Wrapper';
import MyHeader from './MyHeader';

class MyCars extends Component {
    state = {
        cars: ["Ford", "Mercedes", "Peugeot"]
    }

    noCopy = () => {
        alert("Merci de ne pas copier le texte !")
    }

    addStyle = (e) => {
        
        if(e.target.classList.contains('styled'))
        {
            e.target.style.color = "green";
            e.target.classList.remove('styled');
        } else {
            e.target.style.color = null;
            e.target.classList.add('styled');
        }
    }


    render () {
        const {title, titleColor} = this.props;
        const {cars} = this.state;
    return (
        <div className="mycars">
            <Wrapper>
                <MyHeader addStyle={this.addStyle} titleColor={titleColor} >{title}</MyHeader>
            </Wrapper>
                <p onCopy={this.noCopy}>Essayez de me copier pour voir !</p>
            <Car color="red">{cars[0]}</Car>
            <Car>{cars[1]}</Car>
            <Car color="green">{cars[2]}</Car>
            
        </div>
      );
    }
  }
  
  export default MyCars;
  