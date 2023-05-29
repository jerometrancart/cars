const MyHeader = ({ children, titleColor, addStyle }) => 
        <h1 onMouseOver={addStyle} style={ { color: titleColor }}>{children}</h1>

export default MyHeader
    
