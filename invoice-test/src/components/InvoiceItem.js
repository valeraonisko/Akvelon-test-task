import React from 'react';
import './styles/InvoiceItem.css';

export default function InvoiceItem(props) {
  const { number, date_created, date_supplied, comment} = props;
  return (
    <tr>
      <td>{date_created}</td>
      <td className="number">{number}</td>
      <td>{date_supplied}</td>
      <td>{comment}</td>
    </tr>
  )
}
