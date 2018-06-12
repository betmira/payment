import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {  @Input() placeholder: string;

  _ratingValue ;

  // @Input() _searchValue;

  get ratingValue() {
    return this._ratingValue;
  }
  @Output() ratingValueChange = new EventEmitter();
  @Input()
  set ratingValue(value) {
    this._ratingValue = value;
    this.ratingValueChange.emit(this._ratingValue);
  }

  constructor() { }

  ngOnInit() {
  }

}
