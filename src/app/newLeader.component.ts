import { Component, Input } from '@angular/core';
import { CompaniesInfo } from './companiesInfo';
@Component({
  selector: 'new-leader',
  template: `
  <div *ngIf = "leaderArray">
  <h2>HOT STOCK</h2>
<b>Name</b> : {{leaderArray[0].name}}
  <b>TotalSharesInTheCompany</b> : {{leaderArray[0].TotalSharesInTheCompany}}
 <b>ShareValue</b> : <h3>{{leaderArray[0].shareValue}}</h3>
  <b>SharesInDemand</b> : <h3>{{leaderArray[0].sharesInDemand}}</h3>
  <b>SharesReadyForSupply</b> : <h3>{{leaderArray[0].sharesReadyForSupply}}</h3>
  <h2>BEARISH STOCK</h2>
  <b>Name</b> : {{leaderArray[1].name}}
  <b>TotalSharesInTheCompany</b> : {{leaderArray[1].TotalSharesInTheCompany}}
 <b>ShareValue</b> : <h3>{{leaderArray[1].shareValue}}</h3>
  <b>SharesInDemand</b> : <h3>{{leaderArray[1].sharesInDemand}}</h3>
  <b>SharesReadyForSupply</b> : <h3>{{leaderArray[1].sharesReadyForSupply}}</h3>

 </div>
  `,
})
export class NewLeaderComponent  {
@Input()  leaderArray: CompaniesInfo[];
}

