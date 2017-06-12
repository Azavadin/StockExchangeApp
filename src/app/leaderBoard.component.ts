import { Component, Input } from '@angular/core';
import { StockService } from './stock.service';
import { CompaniesInfo } from './companiesInfo';
import { LeaderService } from './leader.service';
@Component({
  selector: 'my-leader',
  template: `<h2>Leader Board</h2>
  <button (click) = "onClick()">CLICK</button>
  
  <div>
  <top-leader [topper] = "topLeader" ></top-leader>
 </div>
 <div>
  <last-leader [last] = "lastLeader" ></last-leader>
 </div>
 `,
 styleUrls: [ './leaderBoard.component.css' ]
})
export class LeaderBoardComponent  {
    topLeader: CompaniesInfo;
    lastLeader: CompaniesInfo;
    constructor(private leaderService: LeaderService) { }
onClick(){
   this.topLeader = this.leaderService.getTopLeader();
   this.lastLeader = this.leaderService.getLastLeader();
}
}

