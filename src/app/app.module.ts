import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import {CompaniesInfo} from './CompaniesInfo';
import { StockService } from './stock.service';
import { StockDetail } from './stockDetail.component';
import { RouterModule } from '@angular/router';
import { DisplayComponent }  from './display.component';
import { LeaderBoardComponent }  from './leaderBoard.component';
import { TechnicalAnalysisComponent }  from './technicalAnalysis.component';
import { LeaderService } from './leader.service';
import { NewLeaderComponent } from './newLeader.component'
@NgModule({
  imports:      [ BrowserModule, FormsModule,
  RouterModule.forRoot([{path: 'display', component: DisplayComponent},
  {path: 'board', component: LeaderBoardComponent},
  {path: 'analysis', component: TechnicalAnalysisComponent}])
   ],
  declarations: [ AppComponent, StockDetail, DisplayComponent, TechnicalAnalysisComponent, LeaderBoardComponent, NewLeaderComponent ],
  bootstrap:    [ AppComponent ],
  providers: [StockService, LeaderService]
})
export class AppModule { }
