import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h3> Hello {{name}}</h3>
    <h4>{{url}}</h4>
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name = 'Sifat Moonjerin';
  public url = window.location.href;

  constructor() { }

  ngOnInit(): void {
  }

}
