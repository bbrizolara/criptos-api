export class Currency {
  constructor(
    public currency_id?: string,
    public currency_name?: string,
    public currency_symbol?: string,
    public currency_total_supply?: number,
    public currency_last_updated?: Date
  ) {}
}
