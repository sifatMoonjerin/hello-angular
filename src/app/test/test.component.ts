import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {

  public name = 'YouTube';
  public message = 'Welcome to YouTube';
  public person = {
    firstName: 'Sifat',
    lastName: 'Moonjerin'
  }

  constructor() {}

  ngOnInit(): void {}

}
