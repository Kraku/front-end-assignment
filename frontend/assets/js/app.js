import '../css/app.css';
import 'inputmask';
import '@kingshott/iodine';
import luhnCheck from './luhn';
import creditCardType from 'credit-card-type';

import Alpine from 'alpinejs';

window.Alpine = Alpine;
window.Alpine.start();

// custom Iodine rule for "MM/YY" date format
window.Iodine.addRule('afterCurrentMonth', (value) => {
  const todayDate = new Date();
  const expirationDate = new Date();
  const [month, year] = value.split('/');

  expirationDate.setFullYear(`20${year}`, parseInt(month, 10) - 1, 1);

  return expirationDate > todayDate;
});

// custom Iodine rule for CC
window.Iodine.addRule('creditCardNumber', luhnCheck);

// custom Iodine error messages
window.Iodine.setErrorMessages({
  ...window.Iodine.messages,
  monthYearAfterOrEqual: 'Please select a valid date',
  creditCardNumber: 'Invalid credit card number'
});

// By default, alpine is using window scope
window.CheckoutApp = {
  getGreditCardMetadata: (creditCardNumber) => {
    const defaultValue = { type: '', codeSize: 3 };
    const first4chars = String(creditCardNumber).substring(0, 4);

    if (first4chars === '0000') return defaultValue;

    const res = creditCardType(first4chars);
  
    if (!Array.isArray(res) || res.length === 0) return defaultValue;
  
    return {
      type: res[0].type,
      codeSize: res[0].code.size,
    }
  }
};
