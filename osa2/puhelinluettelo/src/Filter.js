import React from 'react'

const filter = (props) => {
  return (
    <div>
      <p>Rajaa näytettäviä:</p>
      <input
        type='text'
        value={props.filterWord}
        onChange={props.changeHandler}
      />
    </div>
  )
}

export default filter