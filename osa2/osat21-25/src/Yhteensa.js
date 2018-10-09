import React from 'react'

const Yhteensa = ( props ) => {
    const parts = props.osat
    const initialValue = 0
    const count = parts.reduce(
        (accumulator, currentValue) => accumulator + currentValue.tehtavia,
        initialValue  
    )

    return (
        <ul>Yhteensä {count} tehtävää</ul>
    )   
}

export default Yhteensa