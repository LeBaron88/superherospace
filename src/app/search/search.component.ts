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
  ids = [];
  constructor(private superheroService: SuperheroService) { }

  ngOnInit() {
    this.superheroService.superheroes$.subscribe(sh => this.superheroes = sh);
  }

  formSubmit() {
    if (this.mot.length < 4) {
      this.errorText = 'La recherche doit comporter plus de 3 lettres';
    } else {
      this.errorText = '';
      this.ids = [];
      let shTemp: SuperHero[];
      this.superheroService.loadSuperHeroes(this.mot).subscribe(resultat => {
          console.log(resultat);
          shTemp = resultat['results'].map( result => {
            result.favorite = false;
            this.ids.push(result.id);
            return result;
          });
          this.superheroService.updateSuperheroes(shTemp);
      });
    }
  }

}
