import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-reset-button',
  templateUrl: './reset-button.component.html',
  styleUrls: ['./reset-button.component.scss']
})
export class ResetButtonComponent implements OnInit {
  @Output() resetClicked = new EventEmitter();

  reset() {
    this.resetClicked.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
