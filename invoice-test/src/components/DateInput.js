import React from 'react';
import './styles/DateInput.css';

export default function DateInput(props) {
  const {title, name, value, updateInvoiceNewField} = props;
  return (
    <div className="input-group">
      <label>{title}</label>
      <div id="input-container">
        <input className="date" type="text" id={name} onChange={(event)=>updateInvoiceNewField(name, event.target.value)}
        defaultValue={value} placeholder="Select date" onFocus={(e)=>e.target.type='date'}/>
        <img id="input-img" src="/img/calendar.png"/>
      </div>
    </div>
  )
}
