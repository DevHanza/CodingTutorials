import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlyingHeroesPipe } from './flying-heroes.pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FlyingHeroesPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '44. Change Detection with Impure Pipes';

  heroes: {name: string; canFly:boolean}[] = [];

  addHero(hero: string) {
    // let heroes = [...this.heroes];
    this.heroes.push({ name: hero, canFly: true });
    // this.heroes = heroes;
  }
}
