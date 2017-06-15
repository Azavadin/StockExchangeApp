import { Component, Input } from '@angular/core';
import { CompaniesInfo } from '../data/companiesInfo';
@Component({
  selector: 'top-leader',
  template: `
  <div *ngIf = "topper">
  <h2>HOT STOCK</h2>
<b>Name</b> : {{topper.name}}
  <b>TotalSharesInTheCompany</b> : {{topper.TotalSharesInTheCompany}}
 <b>ShareValue</b> : <h3>{{topper.shareValue}}</h3>
  <b>SharesInDemand</b> : <h3>{{topper.sharesInDemand}}</h3>
  <b>SharesReadyForSupply</b> : <h3>{{topper.sharesReadyForSupply}}</h3>

 </div>
  `,
})
export class topLeaderDisplayComponent  {
@Input()  topper: CompaniesInfo;
}

