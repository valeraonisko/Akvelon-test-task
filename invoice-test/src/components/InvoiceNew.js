import React from 'react';
import TextInput from "./TextInput";
import DateInput from "./DateInput";
import NumberInput from "./NumberInput";
import './styles/InvoiceNew.css';

export default function InvoiceNew(props) {
  const { clickApplyInvoice, invoiceNew, updateInvoiceNewField } = props;
  return (
    <div className="gray">
      <form>
        <div className="white frame">
          <div className="wrapper frame">
            <div className="border frame">
              <table className="new_invoice">
                <tbody>
                  <tr>
                    <td><NumberInput title="Number:" name="number"
                      value={invoiceNew.number} updateInvoiceNewField={updateInvoiceNewField}/></td>
                    <td><DateInput title="Invoice Date:" name="date_created"
                      value={invoiceNew.date_created} updateInvoiceNewField={updateInvoiceNewField}/></td>
                  </tr>
                  <tr>
                    <td><DateInput title="Supply Date:" name="date_supplied"
                      value={invoiceNew.date_supplied} updateInvoiceNewField={updateInvoiceNewField}/></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td colSpan="2"><TextInput title="Comment:" name="comment"
                      value={invoiceNew.comment} updateInvoiceNewField={updateInvoiceNewField}/></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="tool-pane right-align">
              <button className="save" onClick={() => clickApplyInvoice()}> Save </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
