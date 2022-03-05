import propTypes from 'prop-types'
import Button from './button'

const Header = ({title}) =>{

    const onClick = () =>{
        console.log('clickkk')
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='hello' onClick={onClick}/>
        </header>
    )
}

//creating defaults props to my code
Header.defaultProps = {
    title: 'Task Tracker',
}

//making my code more robust
Header.propTypes = {
    title: propTypes.string.isRequired,
}

//styling my header
// const haedingStyle = {
//     color: 'blue', 
//     backgroundColor: 'black'
// }

export default Header;
