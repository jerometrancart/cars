const Car = ({children, color}) => {
    

    if(children) {
        return  (
            <div style={ {
                            backgroundColor: 'pink',
                            width: '40%',
                            padding: '10px',
                            margin: '5px auto'
                        } }
            className="car">
                <p>Marque: {children}</p>
                {/* { color ? (<p>Couleur: {color}</p>) : (<p>Couleur: Inconnue</p>) } */}
                <p>Couleur: {color ? color : "Inconnue"}</p>  
            </div>
        ) 
    } 
}
  
  export default Car;