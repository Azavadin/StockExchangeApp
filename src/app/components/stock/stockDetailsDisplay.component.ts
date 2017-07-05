import { Component, Input, OnInit } from '@angular/core';
import { StockDetailsService } from './stockDetails.service';
@Component({
  selector: 'my-display',
  templateUrl: "./stockDetailsDisplay.component.html"

})
export class StockDetailsDisplayComponent  {
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
       const data2 = data1["2017-02-16"];
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
