import PropTypes from 'prop-types'

const Header = ({ title }) => {
  return (
    <header className='header'>
        <h1>{title}</h1>
        <button className='btn'>Add</button>
    </header>
  )
}

Header.defaultProps = {
    title: "Task Tracker",
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JS
// e.g. <h1 style={headingStyle}></h1>
//const headingStyle = {
    //color: "red",
    //backgroundColor: 'black'
//}

export default Header