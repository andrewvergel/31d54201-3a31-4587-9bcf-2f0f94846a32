import ICryptosRepository, { ICriptos } from '../../../repositories/ICriptosRepository';

export default class CriptosRepository implements ICryptosRepository {
  async getCriptos(): Promise<ICriptos> {
    return {
      currency_id: '',
      currency_name: '',
      currency_symbol: '',
      currency_total_supply: '',
      currency_last_updated: ''
    };
  }
}
