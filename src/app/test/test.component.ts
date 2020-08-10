import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  public name = '';
  public hasError = true;

  constructor() {}

  ngOnInit(): void {}

  showMe(event): void {
    this.name = 'Sifat';
    console.log(event);
  }

  readMe(value: string): void {
    console.log(value);
  }

}
