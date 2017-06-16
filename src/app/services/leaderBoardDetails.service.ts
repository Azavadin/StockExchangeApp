import { Injectable } from '@angular/core';
import { Company } from '../data/company';
import { DATA } from '../data/companiesDataArray';
@Injectable()
export class LeaderBoardDetailsService {
         max: number = -1;
      maxIndex: number = -1;
      min: number = 1000000;
      minIndex: number = -1

getTopLeader(): Company {

      for (var i=0; i<DATA.length; i++){
          if(DATA[i].shareValue > this.max){
             this.max = DATA[i].shareValue;
             this.maxIndex = i;
          }
              }
return DATA[this.maxIndex];
  }

  getLastLeader(): Company{
    for (var i=0; i<DATA.length; i++){
       if(DATA[i].shareValue < this.min){
             this.min = DATA[i].shareValue;
             this.minIndex = i;
          }
    }
    return DATA[this.minIndex];

  }


}
