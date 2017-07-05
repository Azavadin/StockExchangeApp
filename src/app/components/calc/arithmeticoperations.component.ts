import { Component } from '@angular/core';
@Component({
  selector: 'calculate',
  templateUrl: "./arithmeticoperations.component.html"
})
export class ArithmeticOperationsComponent  {
  result: number;
onClick(num1: number, num2: number, num3: number){
this.result = num1+num2-num3;
}  
}

