import '../css/app.css';
import 'inputmask';
import '@kingshott/iodine';

import Alpine from 'alpinejs';

window.Alpine = Alpine;
window.Alpine.start();

// custom rule for "MM/YY" date format
window.Iodine.addRule('afterCurrentMonth', (value) => {
  const todayDate = new Date();
  const expirationDate = new Date();
  const [month, year] = value.split('/');

  expirationDate.setFullYear(`20${year}`, parseInt(month, 10) - 1, 1);

  return expirationDate > todayDate;
});

window.Iodine.setErrorMessages({ ...window.Iodine.messages, monthYearAfterOrEqual: 'Please select a valid date' });
