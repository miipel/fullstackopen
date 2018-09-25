import React from 'react'

import Statistic from './Statistic'

const Statistics = ( props ) => {
  const noFeedBack = props.data.good === 0 && props.data.neutral === 0 && props.data.bad === 0
  const statistics = (
    <div>
      <Statistic statType='good' data={props.data} />
      <Statistic statType='neutral' data={props.data} />
      <Statistic statType='bad' data={props.data} />
      <Statistic statType='average' data={props.data} />
      <Statistic statType='percentage' data={props.data} />
    </div>
  )
  
  return (
    <div>
      <h1>statistiikka</h1>
      <br />
      {noFeedBack ? <p>ei yhtään palautetta annettu</p> : statistics}
    </div>
    
  )
}

export default Statistics