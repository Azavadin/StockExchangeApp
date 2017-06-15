import { Component, Input, OnInit } from '@angular/core';
import { StockService } from '../services/stock.service';
import { CompaniesInfo } from '../data/companiesInfo';
import { DATA } from '../data/companiesData';
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
  index: number;
  constructor(private stockService: StockService) { }
onClick(name: string){
   this.detailsRequested = this.stockService.getCompanyInformation(name);
}
onDemand(name: string){
this.index = this.stockService.getCompanyIndex(name);
if(this.index !=1 ){
  DATA[this.index].sharesInDemand =  DATA[this.index].sharesInDemand+1;
  DATA[this.index].shareValue =  DATA[this.index].shareValue+2.575;
}
}
onSupply(name: string){
this.index = this.stockService.getCompanyIndex(name);
if(this.index !=1 ){
DATA[this.index].sharesReadyForSupply =  DATA[this.index].sharesReadyForSupply+1;
DATA[this.index].shareValue =  DATA[this.index].shareValue-1.575;

}

}


}
