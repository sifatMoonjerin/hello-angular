import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(){
    return [
      {id: '1', name: 'aaaa', age: 23},
      {id: '2', name: 'bbbb', age: 24},
      {id: '3', name: 'cccc', age: 25},
      {id: '4', name: 'dddd', age: 26},
      {id: '5', name: 'eeee', age: 27}
    ];
  }
}
