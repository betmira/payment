import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-filtr',
  templateUrl: './filtr.component.html',
  styleUrls: ['./filtr.component.scss']
})
export class FiltrComponent implements OnInit {
  searchValue: string ;
  ratingValue: number;

  @Output() buttonClicked = new EventEmitter<object>();

  queryJson = {query: undefined , rating: undefined};

  searcheClicked() {
   console.log('search clicked');
   if (this.searchValue != undefined) {
     this.queryJson['query'] = this.searchValue;
   }
   if (this.ratingValue != undefined) {
     this.queryJson['rating'] = this.ratingValue;
   }
    this.buttonClicked.emit(this.queryJson);
  }
  resetClicked() {
    console.log('reset clicked');
    this.searchValue = undefined;
    this.ratingValue = undefined;
    this.queryJson = {query: undefined , rating: undefined};
    this.buttonClicked.emit(this.queryJson );
  }
  constructor() { }

  ngOnInit() {
  }

}
