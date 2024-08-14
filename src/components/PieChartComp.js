import React from 'react'
import CircleGraph from './CircleGraph'

const PieChartComp = () => {
  return (
    <div className='piGraphContainer'>
        <CircleGraph title="Sales in June"/>
        <CircleGraph title="Sales in July"/>
        <CircleGraph title="Sales in August"/> 
    </div>
  )
}

export default PieChartComp