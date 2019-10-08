import {INVOICES_LOAD, INVOICES_ERROR, INVOICES_RECEIVED,
   CLICK_INVOICE_NEW, CLICK_INVOICE_APPLY, UPDATE_INVOICE_NEW_FIELD } from './actions';
import { toInvoice, updateInvoiceField } from './helper';
const initialState = {
  invoiceList: null,
  invoiceLoading: false,
  requestError: null,
  invoiceNew: null
};


export function getNextState(state = initialState, action) {
  switch (action.type) {
    case INVOICES_LOAD:
      return {
        ...state,
        invoiceList: null,
        invoiceLoading: true,
        requestError: null
      };
    case INVOICES_ERROR:
      return {
        ...state,
        invoiceList: null,
        invoiceLoading: false,
        requestError: `post request error: ${action.payload}`
      };
    case INVOICES_RECEIVED:
      return {
        ...state,
        invoiceLoading: false,
        invoiceList: action.payload
      };
    case CLICK_INVOICE_NEW:
      return {
        ...state,
        invoiceNew: {
          number: "INV-002",
          date_created: "",
          date_supplied: "",
          comment: ""
        }
      };
    case CLICK_INVOICE_APPLY:
      const newInvoiceList = state.invoiceList;
      newInvoiceList.push(toInvoice(state.invoiceNew));
      return {
        ...state,
        invoiceList: newInvoiceList,
        invoiceNew: null
      };
    case UPDATE_INVOICE_NEW_FIELD:
      console.log(action.payload);
      return {
        ...state,
        invoiceNew: updateInvoiceField(state.invoiceNew, action.payload)
      };
    default:
      return state;
  }
}
