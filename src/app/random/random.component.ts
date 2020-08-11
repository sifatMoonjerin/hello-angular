import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css'],
})
export class RandomComponent implements OnInit {
  @Input() public parentData: string;
  @Output() public childEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  fireEvent(): void {
    this.childEvent.emit(Math.random() * 100);
  }
}
