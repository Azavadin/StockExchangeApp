import { Component, Input } from '@angular/core';
import { CompaniesInfo } from './companiesInfo';
@Component({
  selector: 'last-leader',
  template: `
  <div *ngIf = "last">
  <h2>BEARISH STOCK</h2>
  <b>Name</b> : {{last.name}}
  <b>TotalSharesInTheCompany</b> : {{last.TotalSharesInTheCompany}}
 <b>ShareValue</b> : <h3>{{last.shareValue}}</h3>
  <b>SharesInDemand</b> : <h3>{{last.sharesInDemand}}</h3>
  <b>SharesReadyForSupply</b> : <h3>{{last.sharesReadyForSupply}}</h3>

 </div>
  `,
})
export class lastLeaderDisplayComponent  {
@Input()  last: CompaniesInfo;
}

