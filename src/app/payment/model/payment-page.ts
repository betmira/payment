import {Payment} from './payment';
import {Pagination} from './pagination';

export class PaymentPage {
  payments: Payment[];
  pagination: Pagination;

  constructor(attrs :{ payments?: Payment[], pagination?: Pagination} = {}) {
    this.payments = attrs.payments;
    this.pagination = attrs.pagination;
  }
}
