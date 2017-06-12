import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `<h2>{{title}} STOCK EXCHANGE</h2>
  <input  [(ngModel)] = "title" placeholder = "Customize the name">
  <nav>
  <button routerLink = "/display">SEARCH FOR YOUR FAVOURITE STOCK</button>
  <button routerLink = "/board">LEADER BOARD</button>
  <button routerLink = "/analysis">TECHNICAL ANALYSIS</button>
  </nav>
  <router-outlet></router-outlet> 
  `,
})
export class AppComponent  {
  title = 'BOMBAY';
}

