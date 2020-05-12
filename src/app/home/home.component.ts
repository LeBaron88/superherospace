import { Component, OnInit } from '@angular/core';
import { superHero } from '../hero-details/hero-details.component';
import { SuperheroService } from '../shared/superhero.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  superheroesMain: superHero[] ;
  constructor(private superheroService: SuperheroService) { }

  ngOnInit() {
    this.superheroesMain = this.superheroService.getSuperheroes();
  }

}
