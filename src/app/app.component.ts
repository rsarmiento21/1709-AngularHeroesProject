import { Component } from '@angular/core';

/*Component Declarator requires a selector and template

*/
export class Hero {
  id: number;
  name: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Heroes';
  hero: Hero = {
    id: 1,
    name: 'Sally'
  };
}
