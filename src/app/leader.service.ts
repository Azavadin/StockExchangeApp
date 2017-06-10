import { Injectable } from '@angular/core';
import { CompaniesInfo } from './companiesInfo';
import { DATA } from './companiesData';
@Injectable()
export class LeaderService {

  getLeader(): CompaniesInfo {
      var max = -1;
      var indx = -1;
      for (var i=0; i<DATA.length; i++){
          if(DATA[i].shareValue > max){
             max = DATA[i].shareValue;
             indx = i;
          }
              

     }
return DATA[i];
  }
}
