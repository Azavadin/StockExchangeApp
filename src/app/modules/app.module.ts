import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from '../components/app.component';
import { StockDetailsService } from '../services/stockDetails.service';
import { RouterModule } from '@angular/router';
import { DisplayComponent }  from '../components/display.component';
import { TechnicalAnalysisComponent }  from '../components/technicalAnalysis.component';
import { LeaderBoardDetailsService } from '../services/leaderBoardDetails.service';
import { HttpModule } from '@angular/http';
@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, 
  RouterModule.forRoot([{path: 'display', component: DisplayComponent},
  {path: 'analysis', component: TechnicalAnalysisComponent}])
   ],
  declarations: [ AppComponent, DisplayComponent, TechnicalAnalysisComponent ],
  bootstrap:    [ AppComponent ],
  providers: [StockDetailsService, LeaderBoardDetailsService]
})
export class AppModule { }
