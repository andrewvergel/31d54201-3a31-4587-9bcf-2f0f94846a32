import axios from 'axios';
import { Criptos } from '../../../domain/Criptos';
import ICryptosRepository, { ICriptos } from '../../../repositories/ICriptosRepository';
import { COINMARKET_API_KEY, COINMARKET_API_URL, COINMARKET_TOTAL_CURRENCIES } from '../../../../shared/config';

export default class CriptosRepository implements ICryptosRepository {
  async getCriptos(): Promise<ICriptos[]> {
    let bitcoin_api_url = COINMARKET_API_URL + 'cryptocurrency/listings/latest?limit=' + COINMARKET_TOTAL_CURRENCIES;
    let result: ICriptos[] = [];

    let {
      data: { data }
    } = await axios.get(bitcoin_api_url, {
      headers: {
        'X-CMC_PRO_API_KEY': COINMARKET_API_KEY
      }
    });

    result = data.map((c: any) => {
      return new Criptos(c.id, c.name, c.symbol, c.total_supply, c.last_updated);
    });

    return result;
  }
}
