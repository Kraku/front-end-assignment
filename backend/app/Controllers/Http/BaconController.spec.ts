import test from 'japa';
import { JSDOM } from 'jsdom';
import supertest from 'supertest';

const BASE_URL = `http://localhost:3333/bacon`;

test.group('BaconController', () => {
  test('ensure the proper number of bacons', async (assert) => {
    const quantity = 12;

    const { text } = await supertest(BASE_URL).get(`/${quantity}`).expect(200);
    const { document } = new JSDOM(text).window;

    assert.equal(document.querySelectorAll('img').length, quantity);
  });
});
