const Wrapper = ({ children }) => {
    return (
        <div style={ {
            backgroundColor: 'pink',
            width: '40%',
            padding: '10px',
            margin: '5px auto'
        } }
        className="car">
            {children}
        </div>
    )
}

export default Wrapper