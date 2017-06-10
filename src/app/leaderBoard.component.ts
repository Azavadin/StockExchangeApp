import { Component, Input } from '@angular/core';
import { StockService } from './stock.service';
import { CompaniesInfo } from './companiesInfo';
import { LeaderService } from './leader.service';
@Component({
  selector: 'my-leader',
  template: `<h2>Leader Board</h2>
  <button (click) = "onClick()">CLICK</button>
  <div>
  <new-leader [detRequested] = "detailedRequested"></new-leader>
 </div>
 `,
})
export class LeaderBoardComponent  {
    detailedRequested: CompaniesInfo;
    constructor(private leaderService: LeaderService) { }
onClick(){
   this.detailedRequested = this.leaderService.getLeader();
}
}

