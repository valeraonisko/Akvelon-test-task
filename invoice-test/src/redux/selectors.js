export const selectInvoiceMap = state => state.invoiceList;

export const selectIsInvoicesLoaded = state => state.invoiceList && !state.invoiceLoading;
export const selectIsError = state => state.requestError !== null;
export const selectRequestError = state => state.requestError;

export const selectInvoiceNew = state => state.invoiceNew;
