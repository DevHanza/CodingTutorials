import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flyingHeroes',
  pure: false
})
export class FlyingHeroesPipe implements PipeTransform {

  transform(heroes: {name: string, canFly: boolean}[] ) {
    return heroes.filter(hero => hero.canFly);
  }

}
