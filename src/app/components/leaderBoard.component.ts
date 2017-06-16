import { Component, Input } from '@angular/core';
import { StockDetailsService } from '../services/stockDEtails.service';
import { Company } from '../data/company';
import { LeaderBoardDetailsService } from '../services/leaderBoardDetails.service';
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
    topLeader: Company;
    lastLeader: Company;
    constructor(private leaderBoardDetailsService: LeaderBoardDetailsService) { }
onClick(){
   this.topLeader = this.leaderBoardDetailsService.getTopLeader();
   this.lastLeader = this.leaderBoardDetailsService.getLastLeader();
}
}

