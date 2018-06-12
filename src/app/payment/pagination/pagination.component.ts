import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() pagitionData;
 // links = Object.keys(this.pagitionData.links);

  @Output() pageClicked = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }


  newPageClicked(arg) {
    this.pageClicked.emit(arg);
  }

}
