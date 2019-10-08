import React from 'react';
import './styles/NumberInput.css';

export default function NumberInput(props) {
  const {title, name, value, updateInvoiceNewField} = props;
  return (
    <div className="input-group">
      <label>{title}</label>
      <div id="input-container">
        <input className="input-number" type="text" id={name} onChange={(event)=>updateInvoiceNewField(name, event.target.value)}
        defaultValue={value}/>
        <img id="input-img" src="/img/tool.png"/>
      </div>
    </div>
  )
}
