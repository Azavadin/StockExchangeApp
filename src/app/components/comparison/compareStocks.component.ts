import { Component, Input, OnInit } from '@angular/core';
import { CompareStocksService } from './compareStocks.service';
@Component({
  selector: 'compare',
  templateUrl: "./compareStocks.component.html"

})
export class CompareStocksComponent{
  close1 = '';
  volume1 = '';
  close2 = '';
  volume2 = '';

  constructor(private compareStocksService: CompareStocksService) { }
onClick(name1: string, name2: string){
   this.compareStocksService.getCompanyInformation(name1).subscribe(
     resData => {const data = resData;
       const data1 = data["Time Series (Daily)"];
       const data2 = data1["2017-02-16"];
       console.log(data);
       console.log(data["Time Series (Daily)"]);
       console.log(data2);
       this.close1 = data2["4. close"];
       this.volume1 = data2["5. volume"];
     }
   );

   this.compareStocksService.getCompanyInformation(name2).subscribe(
     resData => {const data = resData;
       const data1 = data["Time Series (Daily)"];
       const data2 = data1["2017-02-16"];
       console.log(data);
       console.log(data["Time Series (Daily)"]);
       console.log(data2);
       this.close2 = data2["4. close"];
       this.volume2 = data2["5. volume"];
     }
   );
}



}
