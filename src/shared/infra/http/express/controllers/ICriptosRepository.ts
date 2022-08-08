import { Request, Response } from 'express';

export interface ICriptosRepository {
  getCriptos(req: Request, res: Response): Promise<Response>;
}
