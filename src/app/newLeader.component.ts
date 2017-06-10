import { Component, Input } from '@angular/core';
import { CompaniesInfo } from './companiesInfo';
@Component({
  selector: 'new-leader',
  template: `
  <div *ngIf = "detRequested">
  Name : <h4>{{detRequested.name}}</h4>
TotalSharesInTheCompany : <h4>{{detRequested.TotalSharesInTheCompany}}</h4>
 ShareValue :<h4>{{detRequested.shareValue}}</h4>
SharesInDemand : <h4>{{detRequested.sharesInDemand}}</h4>
SharesReadyForSupply : <h4>{{detRequested.sharesReadyForSupply}}</h4>
</div>
 
  `,
})
export class NewLeaderComponent  {
@Input()  detRequested: CompaniesInfo;
}

