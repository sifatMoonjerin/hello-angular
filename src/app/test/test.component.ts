import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h3> Hello {{name}}</h3>
    <h4>{{url}}</h4>
    <input type='text' value='hello' />
    <input [disabled]='isDisabled' type='text' value='hello' />
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name = 'Sifat Moonjerin';
  public url = window.location.href;
  public isDisabled = false;

  constructor() { }

  ngOnInit(): void {
  }

}
