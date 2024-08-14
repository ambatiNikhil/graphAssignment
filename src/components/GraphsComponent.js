import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { data } from '../data'; 
import StackedBarChart from './lineGraphCoponent';
import CircleGraph from './CircleGraph';
import PieChartComp from './PieChartComp';

// import PieGraphChart from './PieChart';
// import ProgressBars from './lineGraphCoponent';


const GraphsComponent = () => {
  return (
    
    <>
    <div className='headingBar'>
    <h5>Graphs</h5> 
    </div>
    <div className='d-flex w-100 b-light'>
       
        {/* <ProgressBars /> */}
        <div className='lineGraphContainer'>
        <StackedBarChart />
        </div>
        <div className='pieGraphContainer'>
         <PieChartComp />
        </div>
        
    </div>
    </>
  )
}

export default GraphsComponent