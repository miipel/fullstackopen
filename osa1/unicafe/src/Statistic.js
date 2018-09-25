import React from 'react'

const Statistic = ( props ) => {
  let average = Math.round(((props.data.good + props.data.bad) / 3) * 100) / 100
  let percentage = Math.round((props.data.good / (props.data.good + props.data.neutral + props.data.bad)) * 100) + '%'  

  switch(props.statType) {
    case 'average':
      return (
        <React.Fragment>
          <td>keskiarvo</td>
          <td>{average}</td>
        </React.Fragment>
      )
    case 'percentage':
      return (
        <React.Fragment>
          <td>positiivisia</td>
          <td>{percentage}</td>
        </React.Fragment>
      ) 
    case 'good':
      return (
        <React.Fragment>
          <td>hyvä</td>
          <td>{props.data.good}</td>
        </React.Fragment>
      ) 
    case 'neutral':
      return (
        <React.Fragment>
          <td>neutraali</td>
          <td>{props.data.neutral}</td>
        </React.Fragment>
      ) 
    case 'bad':
      return (
        <React.Fragment>
          <td>huono</td>
          <td>{props.data.bad}</td>
        </React.Fragment>
      ) 
    default:
      return <td>No statistics</td>
  }

}

export default Statistic