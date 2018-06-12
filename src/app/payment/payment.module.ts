import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './payment.component';
import {SearchComponent} from '../shared/search/search.component';
import {SharedModule} from '../shared/shared.module';
import { FiltrComponent } from './filtr/filtr.component';
import { GridComponent } from './grid/grid.component';
import { PaginationComponent } from './pagination/pagination.component';
import { KeysPipe } from './keys.pipe';
import { ModalComponent } from './modal/modal.component';
import {NgbActiveModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NgbModule.forRoot()

  ],
  declarations: [PaymentComponent, FiltrComponent, GridComponent, PaginationComponent, KeysPipe, ModalComponent],
  exports: [PaymentComponent],
  entryComponents: [ModalComponent]
})
export class PaymentModule { }
