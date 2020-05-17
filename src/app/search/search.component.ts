import { Component, OnInit } from '@angular/core';
import { SuperheroService } from '../shared/superhero.service';
import { SuperHero } from '../shared/superheroInterface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  mot = '';
  errorText = '';
  superheroes: SuperHero[] = [];
  constructor(private superheroService: SuperheroService) { }

  ngOnInit() {
  }

  formSubmit() {
    if (this.mot.length < 4) {
      this.errorText = 'La recherche doit comporter plus de 3 lettres';
    } else {
      this.errorText = this.mot;
      this.superheroService.loadSuperHeroes(this.mot).subscribe(resultat => {
        this.superheroes = resultat['results'].map( result => {
          result.favorite = false;
          return result;
        });
      });

    }
  }

}
