import { Request, Response } from 'express';
import { ICriptosRepository } from './ICriptosRepository';

import CriptosService from '../../../../../criptos/domain/CriptosService';
import { container } from 'tsyringe';

export default class UserControllerRepository implements ICriptosRepository {
  async getCriptos(req: Request, res: Response): Promise<Response> {
    const criptosService = container.resolve(CriptosService);
    const result = await criptosService.execute();
    return res.json(result);
  }
}
