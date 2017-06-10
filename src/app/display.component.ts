import { Component, Input, OnInit } from '@angular/core';
import { StockService } from './stock.service';
import { CompaniesInfo } from './companiesInfo';
@Component({
  selector: 'my-display',
  template: `
  <input  type = "text" #ticker>
  <button (click) = "onClick(ticker.value)">SEARCH</button>
  <div>
<stock-detail [detailRequested] = "detailsRequested"></stock-detail>
<button (click) = "onDemand(ticker.value)">BUY</button>
<button (click) = "onSupply(ticker.value)">SELL</button>
  </div>
  `,
})
export class DisplayComponent  {
  title = 'BOMBAY';
  detailsRequested: CompaniesInfo;
  flag: number;
  constructor(private stockService: StockService) { }
onClick(name: string){
   this.detailsRequested = this.stockService.getCompanyInformation(name);
}
onDemand(name: string){

}
onSupply(name: string){

}


}
