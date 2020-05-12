import { Component, OnInit } from '@angular/core';
import { superHero } from '../hero-details/hero-details.component';
import { SuperheroService } from '../shared/superhero.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  superheroesFav: any;
  constructor(private superheroService: SuperheroService) { }

  ngOnInit() {
   this.superheroesFav = this.superheroService.getSuperheroes().filter(hero => hero.favorite === true);
  }

}
