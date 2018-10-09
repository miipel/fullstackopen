import React from 'react'

const Sisalto = ( props ) => {
    const osat = props.osat

    return (
        <div>
            <ul>{osat.map(osat => <p key={osat.id}>{osat.nimi} {osat.tehtavia}</p>)}</ul>
        </div>
    )
}

export default Sisalto