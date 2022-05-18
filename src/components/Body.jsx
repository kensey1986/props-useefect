import React from 'react'
import PropTypes from 'prop-types'


export const Body = (props) => {
    console.log('================props body====================');
    console.log(props.data);
    console.log('====================================');
    const { nombre, edad, saludo} = props;
  return (
    <div>{nombre} y tambien una edad: {edad *2}</div>
  )

}

Body.defaultProps ={
    nombre: 'carlitos',
    edad: 35
}

Body.propTypes= {
    nombre: PropTypes.string,
    edad: PropTypes.number.isRequired,
    saludo: PropTypes.func,
    myArray: PropTypes.array,
    myObjecto: PropTypes.object
}