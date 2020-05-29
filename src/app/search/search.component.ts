import { Component, OnInit } from '@angular/core';
import { SuperheroService } from '../shared/superhero.service';
import { SuperHero } from '../shared/superheroInterface';
import { IData } from '../shared/dataInterface';

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
  loading = false;
  notFound = false;
  data: IData = null;
  constructor(private superheroService: SuperheroService) { }

  ngOnInit() {
    this.superheroService.superheroes$.subscribe(sh => this.superheroes = sh);
    this.data = this.superheroService.getData();
    this.data.link = '/search';
    this.superheroService.setData(this.data);
    // if (this.data.searchWord !== '') { this.mot = this.data.searchWord; this.formSubmit(); }
    if (this.data.ids.length !== 0) { this.ids = this.data.ids; }

  }

  formSubmit() {
    this.notFound = false;
    if (this.mot.length < 4) {
      this.errorText = 'La recherche doit comporter plus de 3 lettres';
    } else {

      this.data.searchWord = this.mot;
      this.superheroService.setData(this.data);

      this.loading = true;
      this.errorText = '';
      this.ids = [];
      let shTemp: SuperHero[];
      this.superheroService.loadSuperHeroes(this.mot).subscribe(resultat => {
          console.log(resultat);
          if (resultat['response'] === "success") {
          shTemp = resultat['results'].map( result => {
            result.favorite = false;
            this.ids.push(result.id);
            this.data.ids = this.ids;
            this.superheroService.setData(this.data);
            return result;
          });
          this.loading = false;
          this.superheroService.updateSuperheroes(shTemp);
        } else {
          this.loading = false;
          this.notFound = true;
        }

      });
    }
  }

}
