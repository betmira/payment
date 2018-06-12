import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Input() placeholder: string;

  _searchValue = '';

 // @Input() _searchValue;

  get searchValue() {
    return this._searchValue;
  }
  @Output() searchValueChange = new EventEmitter();
  @Input()
   set searchValue(value) {
    this._searchValue = value;
    this.searchValueChange.emit(this._searchValue);
  }

  constructor() { }

  ngOnInit() {
  }

}
