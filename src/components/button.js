import PropTypes from 'prop-types'

const Button = ({color, text, onClick}) =>{
    return (
        <button onClick={onClick} 
        className="btn" 
        style={{ backgroundColor: color}}>
            {text}
        </button>
    )
}

//making default props
Button.defaultProps = {
    color: 'steelblue',
}

//make my code more robust
//no import é maiusculo e na definação do objeto é minusculo
Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func.isRequired,
}

export default Button