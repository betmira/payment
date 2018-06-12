import { Component, OnInit } from '@angular/core';

import {PaymentPage} from './model/payment-page';
import {PaymentService} from './payment.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalComponent} from './modal/modal.component';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
  providers: [PaymentService]
})
export class PaymentComponent implements OnInit {

  constructor(private paymentService: PaymentService) { }
  paymentData; pagitionData;
  queryArgs = {query: undefined, rating: undefined , page: undefined};

  ngOnInit() {

    this.paymentService.getPaymentsHttp({}).subscribe(this.onGetSuccess.bind(this),
      this.onGetFailure.bind(this),
      this.onGetCompleted.bind(this)
    );

  }

  buttonClicked(args) {
      this.queryArgs['query'] = args['query'] ;
      this.queryArgs['rating'] = args['rating'] ;


    this.paymentService.getPaymentsHttp( this.queryArgs).subscribe(this.onGetSuccess.bind(this),
      this.onGetFailure.bind(this),
      this.onGetCompleted.bind(this)
    );
  }

  newPageClicked(page){
    this.queryArgs.page = page;
    this.paymentService.getPaymentsHttp( this.queryArgs).subscribe(this.onGetSuccess.bind(this),
      this.onGetFailure.bind(this),
      this.onGetCompleted.bind(this)
    );
  }

  private onGetSuccess(paymentPage: PaymentPage) {
     this.paymentData = paymentPage.payments[0];
     this.pagitionData = paymentPage.pagination;
    console.log(paymentPage);
    }

  private onGetFailure(err) {

      alert( ' error dowloand Payments: ' + err);
    }

  private onGetCompleted(err) {

    }

}
