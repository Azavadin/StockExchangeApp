import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from '../components/app.component';
import {CompaniesInfo} from '../data/CompaniesInfo';
import { StockService } from '../services/stock.service';
import { StockDetail } from '../components/stockDetail.component';
import { RouterModule } from '@angular/router';
import { DisplayComponent }  from '../components/display.component';
import { LeaderBoardComponent }  from '../components/leaderBoard.component';
import { TechnicalAnalysisComponent }  from '../components/technicalAnalysis.component';
import { LeaderService } from '../services/leader.service';
import { topLeaderDisplayComponent } from '../components/topLeaderDisplay.component';
import { lastLeaderDisplayComponent } from '../components/lastLeaderDisplay.component'
@NgModule({
  imports:      [ BrowserModule, FormsModule,
  RouterModule.forRoot([{path: 'display', component: DisplayComponent},
  {path: 'board', component: LeaderBoardComponent},
  {path: 'analysis', component: TechnicalAnalysisComponent}])
   ],
  declarations: [ AppComponent, StockDetail, DisplayComponent, TechnicalAnalysisComponent, LeaderBoardComponent, topLeaderDisplayComponent, lastLeaderDisplayComponent ],
  bootstrap:    [ AppComponent ],
  providers: [StockService, LeaderService]
})
export class AppModule { }
