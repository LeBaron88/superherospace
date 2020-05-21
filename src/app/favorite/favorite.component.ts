import { Component, OnInit } from '@angular/core';
import { SuperheroService } from '../shared/superhero.service';
import { SuperHero } from '../shared/superheroInterface';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  superheroesFav: SuperHero[];
  constructor(private superheroService: SuperheroService) { }

  ngOnInit() {
   this.superheroService.superheroes$.subscribe(sh => this.superheroesFav = sh.filter(superhero => superhero.favorite === true));
  }

}
