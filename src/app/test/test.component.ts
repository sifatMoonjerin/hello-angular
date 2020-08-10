import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name = 'Sifat Moonjerin';
  public dangerClass = 'text-danger';
  public hasError = true;
  public messageClasses = {
    'text-success': !this.hasError,
    'text-danger': this.hasError,
    'text-special': false
  };
  constructor() { }

  ngOnInit(): void {
  }

}
