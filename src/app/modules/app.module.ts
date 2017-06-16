import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from '../components/app.component';
import {Company} from '../data/Company';
import { StockDetailsService } from '../services/stockDetails.service';
import { StockDetail } from '../components/stockDetailDisplay.component';
import { RouterModule } from '@angular/router';
import { DisplayComponent }  from '../components/display.component';
import { LeaderBoardComponent }  from '../components/leaderBoard.component';
import { TechnicalAnalysisComponent }  from '../components/technicalAnalysis.component';
import { LeaderBoardDetailsService } from '../services/leaderBoardDetails.service';
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
  providers: [StockDetailsService, LeaderBoardDetailsService]
})
export class AppModule { }
