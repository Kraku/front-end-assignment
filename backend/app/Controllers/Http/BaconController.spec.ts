import test from 'japa';
import { JSDOM } from 'jsdom';
import supertest from 'supertest';

const BASE_URL = `http://localhost:3333/bacon`;

test.group('BaconController', () => {
  test('should display 1 image', async (assert) => {
    const { text } = await supertest(BASE_URL).get(`/`).expect(200);
    const { document } = new JSDOM(text).window;

    assert.equal(document.querySelectorAll('img').length, 1);
  });

  test('should display 2 images', async (assert) => {
    const quantity = 2;

    const { text } = await supertest(BASE_URL).get(`/${quantity}`).expect(200);
    const { document } = new JSDOM(text).window;

    assert.equal(document.querySelectorAll('img').length, quantity);
  });

  test('should display 16 images', async (assert) => {
    const quantity = 16;

    const { text } = await supertest(BASE_URL).get(`/${quantity}`).expect(200);
    const { document } = new JSDOM(text).window;

    assert.equal(document.querySelectorAll('img').length, quantity);
  });

  test('should display 32 images', async (assert) => {
    const quantity = 32;

    const { text } = await supertest(BASE_URL).get(`/${quantity}`).expect(200);
    const { document } = new JSDOM(text).window;

    assert.equal(document.querySelectorAll('img').length, quantity);
  });
});
