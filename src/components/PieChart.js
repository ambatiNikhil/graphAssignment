import React from 'react'
import { PieChart, Pie, Tooltip, Cell } from 'recharts';

const Donutgraph = () => {
  
    const data = [
        {name : "Brown Rice" , quantity : "20%"},
        {name : "Bhasmathi Rice" , quantity : "20%"},
        {name : "Black Rice" , quantity : "20%"},
        {name : "Bomba Rice" , quantity : "20%"},
        {name : "Aromatic Rice" , quantity : "20%"}
    ]
    const COLORS = ['#de814b', '#c98055', '#945b3a', '#522e1a' , '#8f3e11'];
  return (
    <div>
        <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="quantity"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
    </div>
  )
}

export default Donutgraph