import { inject, injectable } from 'tsyringe';
import ICryptosRepository from '../repositories/ICriptosRepository';

export interface IResponse {
  code: string;
  message: string;
  data: any | object;
}

@injectable()
export default class CryptosService {
  constructor(
    @inject('CriptosRepository')
    private criptosRepository: ICryptosRepository
  ) {}

  async execute(): Promise<IResponse> {
    const resultData = await this.criptosRepository.getCriptos();
    const result = { code: '001', message: 'Success', data: resultData };
    return result;
  }
}
