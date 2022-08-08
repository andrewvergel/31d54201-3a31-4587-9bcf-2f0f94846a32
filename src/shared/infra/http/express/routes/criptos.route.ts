import { Router } from 'express';
import CriptosControllerRepository from '../controllers/CriptosControllerRepository';
import { container, injectable } from 'tsyringe';
@injectable()
export default class CriptosRoute {
  register(router: Router) {
    router.get('/criptos', (req, res) => container.resolve(CriptosControllerRepository).getCriptos(req, res));
  }
}
