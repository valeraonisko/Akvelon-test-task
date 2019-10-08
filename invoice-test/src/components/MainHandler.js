import {connect} from 'react-redux';
import {loadInvoices, clickNewInvoice, clickApplyInvoice, updateInvoiceNewField} from '../redux/actions';
import Main from './Main';
import {selectIsInvoicesLoaded, selectIsError, selectInvoiceMap,
  selectInvoiceNew, selectRequestError} from '../redux/selectors';

function mapStateToProps(state) {
  return {
    isInvoicesLoaded: selectIsInvoicesLoaded(state),
    isError: selectIsError(state),
    invoiceMap: selectInvoiceMap(state),
    invoiceNew: selectInvoiceNew(state),
    requestError: selectRequestError(state)
  };
};

function mapDispatchToProps(dispatch) {
  return {
    loadInvoices: () => dispatch(loadInvoices()),
    clickNewInvoice: () => dispatch(clickNewInvoice()),
    clickApplyInvoice: () => dispatch(clickApplyInvoice()),
    updateInvoiceNewField: (fieldName, value) => dispatch(updateInvoiceNewField(fieldName, value))
  };
};

const MainHandler = connect(mapStateToProps, mapDispatchToProps)(Main);

export default MainHandler;
