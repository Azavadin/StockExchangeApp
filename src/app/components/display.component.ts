import { Component, Input, OnInit } from '@angular/core';
import { StockDetailsService } from '../services/stockDetails.service';
import { Company } from '../data/company';
import { DATA } from '../data/companiesDataArray';
@Component({
  selector: 'my-display',
  template: `
  <input  type = "text" #ticker>
  <button (click) = "onClick(ticker.value)">SEARCH</button>
  <p>DATE: {{date}}</p>
  <p>SPAN: {{milliSeconds}}</p>
  <p>TIME: {{time}}</p>
  `,
})
export class DisplayComponent  {
  title = 'BOMBAY';
  date = '';
  milliSeconds = '';
  time = '';
  constructor(private stockService: StockDetailsService) { }
onClick(name: string){
   this.stockService.getCompanyInformation(name).subscribe(
     resData => {const data = resData;
       console.log(data);
       this.date = data.date;
       this.milliSeconds = data.milliseconds_since_epoch;
       this.time = data.time;
     }
   );
}



}
