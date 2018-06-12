import { Injectable } from '@angular/core';

import {Observable} from 'rxjs/Observable';
import {PaymentPage} from './model/payment-page';
import {SERVER_API_URL} from '../app.constants';
import {Payment} from './model/payment';
import 'rxjs/add/operator/map';
import {Http} from '@angular/http';
import {Pagination} from './model/pagination';


@Injectable()
export class PaymentService {

  constructor(private http: Http) { }
  getPaymentsHttp(queries?: object): Observable<PaymentPage> {

    // let queryString=''
    // if(queries.page>0 && queries.query != '' && )

    return this.http.get(SERVER_API_URL  ,{ params: queries} ).map(getProductsSuccess.bind(this), getProductsSuccess.bind(this));
    function getProductsSuccess(resp) {

      // debugger;
      // const payments: Payment[] = Array.of( JSON.parse(resp._body.payments) );
      // const pagination: Pagination =  JSON.parse(resp._body.pagination) ;
      // debugger;
      // const usersJson: PaymentPage = new PaymentPage({payments, pagination} ) ;
      // debugger;
      // return usersJson;
      const body = JSON.parse(resp._body);
      const payments: Payment[] = Array.of( body.payments) ;
      const pagination: Pagination =   body.pagination ;
      const usersJson: PaymentPage = new PaymentPage({payments, pagination} ) ;// == Array.of( JSON.parse() );
      return usersJson;
    }

  }


/*  getPaymentsHttp2(queries?: string): Observable<PaymentPage> {
    debugger;
    const jj = {"payments":[{"payment_supplier":"CROMWELL POLYTHENE LTD.","payment_ref":"1141575","payment_cost_rating":"2","payment_amount":"1687.65"},{"payment_supplier":"CTC CHARITABLE TRUST","payment_ref":"1141433","payment_cost_rating":"2","payment_amount":"2350.00"},{"payment_supplier":"CUTLER, R","payment_ref":"499427","payment_cost_rating":"2","payment_amount":"1900.00"},{"payment_supplier":"CYCLE EXPERIENCE LTD","payment_ref":"499428","payment_cost_rating":"3","payment_amount":"2937.50"},{"payment_supplier":"D & D (DOUBLE GLAZING) LTD","payment_ref":"499429","payment_cost_rating":"3","payment_amount":"4068.00"}],"pagination":{"total":50,"current":"12","links":{"8":"page=8","9":"page=9","10":"page=10","11":"page=11","12":"page=12","13":"page=13","14":"page=14","15":"page=15","16":"page=16","0":"page=0","49":"page=49"},"from":8,"to":17,"left":true,"right":true,"leftEnd":true,"rightEnd":true}};

      debugger;
      //const all = JSON.parse(jj) ;
      const payments: Payment[] = Array.of( jj.payments) ;
      const pagination: Pagination =  jj.pagination ;
      debugger;
      const usersJsons:  Observable<PaymentPage>  = new PaymentPage({payments, pagination} ) ;// == Array.of( JSON.parse() );
      debugger;
      return usersJsons;

  }*/
}
