export class Payment {
  payment_supplier: string;
  payment_ref: string;
  payment_cost_rating: string;
  payment_amount: string;

  constructor( attrs: {payment_supplier?: string, payment_ref?: string, payment_cost_rating?: string, payment_amount?: string}= {} ){
    this.payment_supplier = attrs.payment_supplier;
    this.payment_ref = attrs.payment_ref;
    this.payment_cost_rating = attrs.payment_cost_rating;
    this.payment_amount = attrs.payment_amount;

  }

}
