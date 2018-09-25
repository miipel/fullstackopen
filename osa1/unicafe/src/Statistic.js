import React from 'react'

const Statistic = ( props ) => {
  let average = Math.round(((props.data.good + props.data.bad) / 3) * 100) / 100
  let percentage = Math.round((props.data.good / (props.data.good + props.data.neutral + props.data.bad)) * 100) + '%'  

  switch(props.statType) {
    case 'average':
      return <p>keskiarvo {average}</p>
    case 'percentage':
      return <p>positiivisia {percentage}</p>
    case 'good':
      return <p>hyvä {props.data.good}</p>
    case 'neutral':
      return <p>neutraali {props.data.neutral}</p>
    case 'bad':
      return <p>huono {props.data.bad}</p>
    default:
      return <p>No statistics</p>
  }

}

export default Statistic