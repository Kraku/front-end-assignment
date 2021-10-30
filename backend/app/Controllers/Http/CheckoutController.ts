import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

export default class CheckoutController {
  public async index({ view }: HttpContextContract) {
    const state = {
      cart: {
        items: [
          { name: 'Apple Watch Sport', price: 580 },
          { name: 'Modern Buckle', price: 380 }
        ],
        totals: {
          subTotal: 960,
          tax: 0,
          grandTotal: 960
        }
      }
    };

    return view.render('checkout', state);
  }
}
