import React from 'react'
import { useState } from 'react';
import { data } from '../data'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Item from './Item'

const ItemsBar = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className='stockBarStyle'>
      <div className='headingBar'>
        <h5>Stock</h5> 
        <div className='calenderStyle'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar4" viewBox="0 0 16 16">
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>
          </svg>
          <div className='nameBox'>
         <h6>August</h6>
         </div>

        </div>
      </div>
   <div className='itemsBarStyle'>
    {data.map((item) => (
        <Item key={item.Id} name={item.Name} quantity={item.Quantity} />
      ))}
   </div>

   </div>
  )
}

export default ItemsBar