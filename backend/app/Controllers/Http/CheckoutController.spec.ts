import test from 'japa';
import { JSDOM } from 'jsdom';
import supertest from 'supertest';

const BASE_URL = `http://localhost:3333/checkout`;

test.group('CheckoutController', () => {
  test('should assign empty string as initial value to first name input', async (assert) => {
    const { text } = await supertest(BASE_URL).get('/').expect(200);
    const { document } = new JSDOM(text).window;

    const node = <HTMLInputElement>document.querySelector('#firstName');

    assert.equal(node.value, '');
  });

  test('should assign empty string as initial value to last name input', async (assert) => {
    const { text } = await supertest(BASE_URL).get('/').expect(200);
    const { document } = new JSDOM(text).window;

    const node = <HTMLInputElement>document.querySelector('#lastName');

    assert.equal(node.value, '');
  });

  test('should assign empty string as initial value to email input', async (assert) => {
    const { text } = await supertest(BASE_URL).get('/').expect(200);
    const { document } = new JSDOM(text).window;

    const node = <HTMLInputElement>document.querySelector('#email');

    assert.equal(node.value, '');
  });

  test('should assign US as initial value to country select', async (assert) => {
    const { text } = await supertest(BASE_URL).get('/').expect(200);
    const { document } = new JSDOM(text).window;

    const node = <HTMLInputElement>document.querySelector('#country');

    assert.equal(node.value, 'US');
  });

  test('should assign empty string as initial value to postal code input', async (assert) => {
    const { text } = await supertest(BASE_URL).get('/').expect(200);
    const { document } = new JSDOM(text).window;

    const node = <HTMLInputElement>document.querySelector('#postalCode');

    assert.equal(node.value, '');
  });

  test('should assign empty string as initial value to phone input', async (assert) => {
    const { text } = await supertest(BASE_URL).get('/').expect(200);
    const { document } = new JSDOM(text).window;

    const node = <HTMLInputElement>document.querySelector('#phone');

    assert.equal(node.value, '');
  });
  
  test('should assign empty string as initial value to credit card input', async (assert) => {
    const { text } = await supertest(BASE_URL).get('/').expect(200);
    const { document } = new JSDOM(text).window;

    const node = <HTMLInputElement>document.querySelector('#creditCard');

    assert.equal(node.value, '');
  });

  test('should assign empty string as initial value to CVV input', async (assert) => {
    const { text } = await supertest(BASE_URL).get('/').expect(200);
    const { document } = new JSDOM(text).window;

    const node = <HTMLInputElement>document.querySelector('#CVV');

    assert.equal(node.value, '');
  });

  test('should assign empty string as initial value to Expiration date input', async (assert) => {
    const { text } = await supertest(BASE_URL).get('/').expect(200);
    const { document } = new JSDOM(text).window;

    const node = <HTMLInputElement>document.querySelector('#expDate');

    assert.equal(node.value, '');
  });

  /*
   * Just an example of test with some events. This code will not work since most of the actions is made with Alpine.js that is not initialized in this test env.
   *
   * There is no utilities for alpine in japa since it is mostly used for node.js testing. I chose it so I could compare it with jest and mocha.
   * With jest we could make it work really easilly with help of https://github.com/HugoDF/alpine-test-utils.
  */

  /*
  test('should show error message for empty first name after focus and blur', async (assert) => {
    const { text } = await supertest(BASE_URL).get('/').expect(200);
    const { document } = new JSDOM(text).window;

    const inputNode = <HTMLInputElement>document.querySelector('#firstName');
    const errorNode = document.querySelector('#firstName-error');

    assert.notExists(errorNode);

    inputNode.focus();
    inputNode.blur();

    errorNode = document.querySelector('#firstName-error');

    assert.exists(errorNode, '');
  });  
  */
});
