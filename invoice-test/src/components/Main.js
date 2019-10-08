import React, { Component } from 'react';
import './styles/Main.css';

import Header from './Header';
import InvoiceNew from './InvoiceNew';
import InvoiceTable from './InvoiceTable';


export default class Main extends Component {
  componentDidMount() {
    this.props.loadInvoices()
  }

  pageMain () {
    const { isInvoicesLoaded, isError, invoiceMap, requestError, clickNewInvoice} = this.props;
    if (isInvoicesLoaded) {
      return (<InvoiceTable clickNewInvoice={clickNewInvoice} invoiceMap={invoiceMap} />)
     } else {
      return isError ? requestError : "Invoice list is loading..."
     }
  }

  pageInvoiceNew () {
    const { invoiceNew, isInvoicesLoaded, isError, requestError, clickApplyInvoice, updateInvoiceNewField} = this.props;
    if (isInvoicesLoaded) {
      return invoiceNew ? (<InvoiceNew invoiceNew={invoiceNew}
        clickApplyInvoice={clickApplyInvoice} updateInvoiceNewField={updateInvoiceNewField}/>) : "error: Invoice new was not selected";
    } else {
      return isError ? requestError : "Invoice list is loading...";
    }
  }

  render () {
    const { invoiceNew } = this.props;

    return (
      <>
        <header>
          <Header pageTitle={invoiceNew ? "Create Invoice" : "Invoices"}/>
        </header>
        <main>
          { invoiceNew ? this.pageInvoiceNew() : this.pageMain ()}
        </main>
        <footer>
        </footer>
      </>
    );
  }

}
