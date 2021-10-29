import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

export default class BaconController {
  public async index({ view, params }: HttpContextContract) {
    const quantity: number = parseInt(params.quantity, 10) || 1;

    return await view.render('bacon', {
      quantity: quantity,
      imgSrc: '/images/bacon.jpg'
    });
  }
}
