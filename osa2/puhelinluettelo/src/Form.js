import React from 'react'

const form = (props) => {
  return (
    <div>
      <h3>Lisää uusi</h3>
      <form onSubmit={props.addNew} >
        <div>
          nimi:
            <input
            type='text'
            value={props.name}
            onChange={props.nameChanged}
          />
        </div>
        <div>
          numero:
            <input
            type='number'
            value={props.number}
            onChange={props.numberChanged}
          />
        </div>
        <div>
          <button type="submit">lisää</button>
        </div>
      </form>
    </div>
  )
}

export default form