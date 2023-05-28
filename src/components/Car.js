const Car = ({children, color}) => {
    const colorInfo  = color ? (<p>Couleur: {color}</p>) : (<p>Couleur: Non définie</p>);
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
    
  }
  
  export default Car;