import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SuperheroService } from '../shared/superhero.service';



@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {

  @Input('superhero') superhero: superHero;

  @Output('addToFavorite') addToFavoriteTo = new EventEmitter();
  count = 0;

  constructor(private superheroService: SuperheroService) {}

  ngOnInit() {}

  addFavorite($event) {
    //console.log($event);
    //this.addToFavoriteTo.emit(this.superhero.id);
    this.superheroService.setFavorite(this.superhero.id);
  }



}

export interface superHero {
  id: number;
  name: string;
  description: string;
  imgSrc: string;
  favorite: boolean;
}
