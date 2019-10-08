export function getToken() {
  let token = "";
  for(let i = 1; i <=6; i++) {
    token += Math.floor(Math.random() * 65365).toString(16);
  }
  return token;
}

export function toInvoice(inputInvoice) {
  return {
    "_id": getToken(),
    "number": inputInvoice.number,
    "date_created": inputInvoice.date_created,
    "date_supplied": inputInvoice.date_supplied,
    "comment": inputInvoice.comment
  }
}

export function updateInvoiceField(invoice, payload) {
  const [fieldName, value] = payload;
  if (fieldName === "number")  invoice.number = value;
  if (fieldName === "date_created") invoice.date_created = value;
  if (fieldName === "date_supplied") invoice.date_supplied = value;
  if (fieldName === "comment") invoice.comment = value;
  console.log(invoice);
  return invoice;
}
