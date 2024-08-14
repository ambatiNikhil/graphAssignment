import React from 'react';
import { PieChart, Pie, Tooltip, Cell, Legend } from 'recharts';

const CircleGraph = ({title}) => {
    
    const data = [
        { name: "Brown Rice", quantity: 20 },
        { name: "Basmathi Rice", quantity: 20 }, // Corrected spelling from Bhasmathi to Basmathi
        { name: "Black Rice", quantity: 20 },
        { name: "Bomba Rice", quantity: 20 },
        { name: "Aromatic Rice", quantity: 20 }
    ];
    const COLORS = ['#de814b', '#c98055', '#945b3a', '#522e1a', '#8f3e11'];

    return (
        <div className='pieChartStyle'>
            <h2>{title}</h2> {/* Title added */}
            <PieChart width={320} height={350}>
                <Pie
                    data={data}
                    cx={100}
                    cy={100}
                    innerRadius={70} // Adjusted for donut shape
                    outerRadius={100} // Adjusted for donut shape
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="quantity"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
                <Legend verticalAlign="bottom" height={36} />
            </PieChart>
        </div>
    );
};

export default CircleGraph;
