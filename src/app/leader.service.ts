import { Injectable } from '@angular/core';
import { CompaniesInfo } from './companiesInfo';
import { DATA } from './companiesData';
@Injectable()
export class LeaderService {
         max: number = -1;
      maxIndex: number = -1;
      min: number = 1000000;
      minIndex: number = -1
      leadersArray: CompaniesInfo[];
getLeaders(): CompaniesInfo[] {

      for (var i=0; i<DATA.length; i++){
          if(DATA[i].shareValue > this.max){
             this.max = DATA[i].shareValue;
             this.maxIndex = i;
          }
               if(DATA[i].shareValue < this.min){
             this.min = DATA[i].shareValue;
             this.minIndex = i;
          }


     }
     this.leadersArray[0] = DATA[this.maxIndex];
     this.leadersArray[1] = DATA[this.minIndex];
return this.leadersArray;
  }


}
