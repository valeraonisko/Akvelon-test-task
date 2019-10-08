export const INVOICES_LOAD = 'invoices_load';
export const INVOICES_ERROR = 'invoices_error';

export const INVOICES_RECEIVED = 'invoices_received';

export const CLICK_INVOICE_NEW = 'click_invoice_new';
export const CLICK_INVOICE_APPLY = 'click_invoice_apply';
export const UPDATE_INVOICE_NEW_FIELD = 'update_invoice_new_field';

const serverUrl = 'http://localhost:3001';

export const setLoadInvoices = () => {
  return {
    type: INVOICES_LOAD
  }
}

export const errorInvoices = (err) => {
  return {
    type: INVOICES_ERROR,
    payload: err
  }
}

export const loadInvoices = () => (dispatch) => {
  dispatch(setLoadInvoices());
  fetch(`${serverUrl}/invoices`)
    .then(response => {
      if(response.ok) {
        response.json().then(invoicesList => {
          dispatch(receiveInvoices(invoicesList))
        })
      } else {
        console.log('error load invoices');
        dispatch(errorInvoices('error load invoices'))
      }
    })
    .catch(err => {
    console.log('error load invoices');
    dispatch(errorInvoices(err.message))
    })
};


export const receiveInvoices = (invoicesList) => {
  return {
    type: INVOICES_RECEIVED,
    payload: invoicesList
  }
}

export function clickNewInvoice() {
  return {
    type: CLICK_INVOICE_NEW
  };
}


export function clickApplyInvoice() {
  return {
    type: CLICK_INVOICE_APPLY
  };
}

export function updateInvoiceNewField(fieldName, value) {
  console.log(value);

  return {
    type: UPDATE_INVOICE_NEW_FIELD,
    payload: [fieldName, value]
  };
}
