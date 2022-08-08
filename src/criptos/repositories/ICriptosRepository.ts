export interface ICriptos {
  currency_id: any | undefined;
  currency_name: any | undefined;
  currency_symbol: any | undefined;
  currency_total_supply: any | undefined;
  currency_last_updated: any | undefined;
}

export default interface ICriptosRepository {
  getCriptos(): Promise<ICriptos | null>;
}
