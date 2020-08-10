import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  public name = 'Sifat Moonjerin';
  public hasError = true;
  public highlight = 'orange';
  public styleObj = {
    color: 'blue',
    fontStyle: 'italic'
  };

  constructor() {}

  ngOnInit(): void {}
}
