import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() {
    console.log('yyy')
   }

  //component initilialize edildiğinde çalışır
  ngOnInit(): void {
    console.log('xxx')
  }

}
