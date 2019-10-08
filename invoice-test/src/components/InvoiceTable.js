import React from 'react';
import InvoiceItem from './InvoiceItem';
import './styles/InvoiceTable.css';

export default function InvoiceTable(props) {
  const { clickNewInvoice, invoiceMap} = props;
  const invoices = invoiceMap.map(invoiceItem => (<InvoiceItem {...invoiceItem} key={invoiceItem._id}/>));
  return (
    <div className="gray">
      <div className="white frame">
        <h2>Actions</h2>
        <div>
          <button onClick={() => clickNewInvoice()}> Add new </button>
        </div>
      </div>
      <div className="white frame">
        <h2>Invoices</h2>
        <div className="table-wrapper">
          <table className="invoice-table">
            <thead>
              <tr>
                <th>Create</th>
                <th>No</th>
                <th>Supply</th>
                <th>Comment</th>
              </tr>
            </thead>
            <tbody>{invoices}</tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
