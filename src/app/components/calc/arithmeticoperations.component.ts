import { Component } from '@angular/core';
@Component({
  selector: 'calculate',
  templateUrl: "./arithmeticoperations.component.html"
})
export class ArithmeticOperationsComponent  {
  result: number;
onClick(num1: string, num2: string, num3: string){
this.result = parseInt(num1) + parseInt(num2)-parseInt(num3);
}  
}

