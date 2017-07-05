import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from '../components/app/app.component';
import { StockDetailsService } from '../components/stock/stockDetails.service';
import { RouterModule } from '@angular/router';
import { StockDetailsDisplayComponent }  from '../components/stock/stockDetailsDisplay.component';
import { TechnicalAnalysisComponent }  from '../components/technicalAnalysis/technicalAnalysis.component';
import { CompareStocksComponent } from '../components/comparison/compareStocks.component';
import { CompareStocksService } from '../components/comparison/compareStocks.service';
import { HttpModule } from '@angular/http';
import { ChartsModule } from 'ng2-charts';
@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule,
  RouterModule.forRoot([{path: 'display', component: StockDetailsDisplayComponent},
  {path: 'analysis', component: TechnicalAnalysisComponent},
  {path: 'compare', component: CompareStocksComponent}])
   ],
  declarations: [ AppComponent, StockDetailsDisplayComponent, TechnicalAnalysisComponent, CompareStocksComponent],
  bootstrap:    [ AppComponent ],
  providers: [StockDetailsService, CompareStocksService]
})
export class AppModule { }
