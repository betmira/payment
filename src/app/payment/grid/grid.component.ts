import {Component, Input, OnInit} from '@angular/core';
import {Payment} from '../model/payment';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalComponent} from '../modal/modal.component';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  @Input() private paymentData;

  ratingCount = 5;

  // get paymentData(): Payment[] {
  //   debugger;
  //   return this._paymentData;
  //
  // }
  //
  // set paymentData(value: Payment[]) {
  //   this._paymentData = value;
  // }

  htmlContentBlue = '<img src="../../../assets/ratingBlue.png" />';
  htmlContentWhite = '<img src="../../../assets/ratingWhite.png" />';
  getHtml(rat) {
    let htmlContent = '';
    for (let i=0; i< this.ratingCount; i++ ) {
      if ( rat > i) {
        htmlContent += this.htmlContentBlue;
      }
      else{
        htmlContent += this.htmlContentWhite;
      }
    }

    return  htmlContent;
  }

  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {
  }
  open(row) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.ratingHTML = this.getHtml(row.payment_cost_rating);
    modalRef.componentInstance.paymentRow = row;
  }
}
