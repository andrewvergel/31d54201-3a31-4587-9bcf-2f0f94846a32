import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { IControllerRepository } from './IControllerRepository';

export default class CriptosControllerRepository implements IControllerRepository {
  async run(req: Request, res: Response) {
    res.status(httpStatus.OK).send('OK');
  }
}
