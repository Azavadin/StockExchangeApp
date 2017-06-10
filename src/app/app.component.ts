import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `<h2>{{title}} STOCK EXCHANGE</h2>
  <input  [(ngModel)] = "title" placeholder = "Customize the name">
  <nav>
  <a routerLink = "/display">SEARCH</a>
  <a routerLink = "/board">LEADER</a>
  <a routerLink = "/analysis">TECHNICAL</a>
  </nav>
  <router-outlet></router-outlet> 
  `,
})
export class AppComponent  {
  title = 'BOMBAY';
}

