const Car = ({children, color}) => {
    const colorInfo  = color ? (<p>Couleur: {color}</p>) : (<p>Couleur: Inconnue</p>);

      if(children) {
        return (
            <div style={ {
                            backgroundColor: 'pink',
                            width: '40%',
                            padding: '10px',
                            margin: '5px auto'
                        } }
            className="car">
              <p>Marque: {children}</p>
              { colorInfo }
            </div>
          );
      } else {

        return (
            <div style={ {
                backgroundColor: 'pink',
                width: '40%',
                padding: '10px',
                margin: '5px auto'
            } }
            className="car">
            <p>Données manquantes</p>
            </div>
          );
      }
  }
  
  export default Car;