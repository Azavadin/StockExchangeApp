import { Component, Input, OnInit } from '@angular/core';
import { StockDetailsService } from '../services/stockDetails.service';
@Component({
  selector: 'my-display',
  template: `
  <input  type = "text" #ticker>
  <button (click) = "onClick(ticker.value)">SEARCH</button>
  <p>OPEN: {{open}}</p>
  <p>HIGH: {{high}}</p>
  <p>LOW: {{low}}</p>
  <p>CLOSE: {{close}}</p>
  <p>VOLUME: {{volume}}</p>
  `,

})
export class DisplayComponent  {
  title = 'BOMBAY';
  open = '';
  high = '';
  low = '';
  close = '';
  volume = '';
  constructor(private stockService: StockDetailsService) { }
onClick(name: string){
   this.stockService.getCompanyInformation(name).subscribe(
     resData => {const data = resData;
       const data1 = data["Time Series (Daily)"];
       const data2 = data1["2017-02-08"];
       console.log(data);
       console.log(data["Time Series (Daily)"]);
       console.log(data2);
       this.open = data2["1. open"];
       this.high = data2["2. high"];
       this.low = data2["3. low"];
       this.close = data2["4. close"];
       this.volume = data2["5. volume"];
     }
   );
}



}
