import React from 'react';

export default function TextInput(props) {
  const {title, name, value, updateInvoiceNewField } = props;
  return (
    <div className="input-group">
      <label>{title}</label>
      <div>
        <textarea id={name} defaultValue={value}
          onChange={(event)=>updateInvoiceNewField(name, event.target.value)}></textarea>
      </div>
    </div>
  )
}
