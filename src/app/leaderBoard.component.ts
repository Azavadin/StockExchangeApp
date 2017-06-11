import { Component, Input } from '@angular/core';
import { StockService } from './stock.service';
import { CompaniesInfo } from './companiesInfo';
import { LeaderService } from './leader.service';
@Component({
  selector: 'my-leader',
  template: `<h2>Leader Board</h2>
  <button (click) = "onClick()">CLICK</button>
  
  <div>
  <new-leader [leaderArray] = "leadersArray"></new-leader>
 </div>
 `,
 styleUrls: [ './leaderBoard.component.css' ]
})
export class LeaderBoardComponent  {
    leadersArray: CompaniesInfo[];
    constructor(private leaderService: LeaderService, private stockService: StockService) { }
onClick(){
   this.leadersArray = this.leaderService.getLeaders();
}
}

